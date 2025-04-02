const {Schema, model} = require('mongoose');

const dishSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    description: {
        type: String,
        required: true, 
        minlength: 50,
        maxlength: 1000
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    }],
    photo: { 
        type: String,
        required: true
    }
});

const Dish = model("Dish", dishSchema);

module.exports = Dish;