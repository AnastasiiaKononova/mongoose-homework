const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  calories: {
    type: Number,
    min: 0,
    default: 0,
  },
  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],
});

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;
