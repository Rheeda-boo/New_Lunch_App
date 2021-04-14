const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.getLogin = (req, res, next) => {
    res.send("Login Page");
};

exports.postLogin = (req, res, next) => {
    const email  = req.body.email;
    const password = req.body.password;

    // console.log(password, email);

    let errors = [];

    if (!email || !password){
        errors.push({msg: "Please fill in all fields"});
    }

    else {
        User.findOne({email: email}).exec((error, user) => {
            if (!user) {
                res.send("Not a User");
            }
            else {
                bcrypt.compare(password, user.password)
                .then(domatch => {
                    if (domatch) {
                        User.findOne((role) => {
                            if (user.role === "admin") {
                                res.send("Admin User");
                            }
                            else if (user.role === "manager") {
                                res.send("Manager User");
                            }
                            else {
                                res.send("Student User");
                            };    
                        });
                    }
                    else {
                        res.send({msg: "Incorrect password"})
                    }
                });
            };
        });
    };
    
};

exports.getSignUp = (req, res, next) => {
    res.send("SignUp Page");
};

exports.postSignUp = (req, res, next) => {
    const name  = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    let errors = [];

    if (!name || !email || !password || !password2) {
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
                    role: "student",
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

