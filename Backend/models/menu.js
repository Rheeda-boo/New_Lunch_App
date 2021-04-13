const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =  new Schema({

    foodName: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    day: {
        type: String,
        required: true,
    },

    foodImg : {
        type : String,
        required : true,   
    },

    description : {
        type : String,
        trim : true,   
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },

});