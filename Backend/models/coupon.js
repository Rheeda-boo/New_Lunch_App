const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const couponSchema =  new Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },

    date: {
        // type: String,
        // required: true,
    },

});

const couponModel  = mongoose.model("Coupon", couponSchema);

module.exports = couponModel;