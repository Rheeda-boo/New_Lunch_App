const User = require('../models/user');
const Coupon = require('../models/coupon');

const bcrypt = require("bcrypt");

exports.getAddUser = (req, res, next ) => {
    res.send("Add User Page");
};

exports.postAddUser = (req, res, next ) => {
    const name  = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
    const role = req.body.role;

    let errors = [];

    if (!name || !email || !password || !password2 || !role) {
        res.send({ msg: "Please fill in all fields" });
    }

    else if (password !== password2) {
        res.send({ msg: "Passwords do not match" });
    }

    else if (password.length < 6) {
        res.send({ msg: "Password must be at least 6 characters" });
    }
    else {
        User.findOne({email: email}).exec((err, user) => {
            if (user) {
                res.send("Already a User");
            }
            else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password,
                    role: role,
                });

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) {
                            throw error
                        }
                        else {
                            newUser.password = hash;

                            newUser
                            .save()
                            .then((value) => {
                                res.send({msg: "SignUp successful"})
                            })
                            .catch((value) => console.log(value));
                        };
                    });    
                });
            };
        });
    };

};

exports.getAllUsers = (req, res ) => {
    User.find({}, (error, user) => {
        console.log(user);
        const allusers = user.length;

        if (error) {
            console.error(error);
            return res.send({error : error});
        }
        else{
            console.log(allusers);
            
            let adminCounter = 0;
            let staffCounter = 0;
            let traineeCounter = 0;
            let managerCounter = 0;

            
            for (let person of user) {
              if (person.role === "admin") {
                adminCounter++;
              } else if (person.role === "manager") {
                managerCounter++;
              } else if (person.role === "staff") {
                staffCounter++;
              } else {
                traineeCounter++;
              } 
            }
            res.send(
                {allusers , 
                adminCounter,
                managerCounter, 
                staffCounter, 
                traineeCounter, 
                user
            });
                       
        };
    });
};

exports.getAddCoupon = (req, res) => {
    res.send("Add Coupon Page");
}

exports.postAddCoupon = (req, res) => {
    const code = req.body.code;
    
    if  (!code) {
        res.send({msg: "Please fill all fields"})
    }
    else if (code.length < 8 || code.length > 8) {
        res.send({msg: "Please enter 8 characters" })
    }
    else {

        Coupon.findOne({code: code}).exec((error, coupon) => {
            if (coupon) {
                res.send({ msg: "Coupon code already entered"})
            }

            else{
                const code = req.body.code;
                const coupon = new Coupon({
                    code: code,
                    date: new Date(),
                })
                .save()
                .then((result) => {
                    res.send("Coupon added Succesfully");
                    
                })
                .catch(err => {
                    console.log(err);     
                });
            }
    
        })
    }
};

exports.postRandomCoupon = (req, res) => {
    var code = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++) {
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
        const coupon = new Coupon({
            code: code,
            date: new Date(),

        })
    .save()
    .then((value) => {
        console.log(code);
        res.send({msg: "Coupon added successfully"})
    })
    .catch((value) => console.log(value));

};

exports.postValidateCoupon = (req, res) => {
    const code = req.body.code;

    Coupon.findOne({code: code}).exec((error, coupon) => {
        if (!coupon) {
            res.send("Please enter a valid Coupon ");
            console.log("Please enter a valid Coupon ");

        }
        else {
            res.send("A valid Coupon ");
            console.log("A valid Coupon ");
        }
    })
};


