const Menu = require('../models/menu');

exports.getaddFood = (req, res, next) => {
    res.send("Add Food Page");
};

exports.postaddFood = (req, res, next) => {


    const foodName  = req.body.foodName;
    const price  = req.body.price;
    const day = req.body.day;
    const description = req.body.description;
    const foodImg = req.body.foodImg;

    if (!foodName || !price || !day || !description || !foodImg) {
        res.send({msg: "Please fill all fields"})
    }
    else {
        const newMenu = new Menu({
            foodName: foodName,
            price: price,
            day: day,
            description: description,
            foodImg: foodImg
        })
        .save()
        .then((value) => {
            res.send({msg: "Food successfully"})
        })
        .catch((value) => console.log(value));
    }
    

};
