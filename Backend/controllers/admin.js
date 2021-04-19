const User = require('../models/user');
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
        if (error) {
            console.error(error);
            return res.send({error : error});
        }
        else{
            console.log(user.length);
            res.send(user.length);
        }
    })
};

