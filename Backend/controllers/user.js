const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.getLogin = (req, res, next) => {
    res.send("Login Page");
}

exports.postLogin = (req, res, next) => {
    const email  = req.body.email;
    const password = req.body.password;

    console.log(password, email);

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