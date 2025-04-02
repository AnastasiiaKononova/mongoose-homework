const { Ingredient, Dish } = require("../models");

module.exports.createOne = async (req, res, next) => {
  try {
    const { body } = req;
    const newIngredient = await Ingredient.create(body);
    res.status(201).send({ data: newIngredient });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    if (!ingredients.length) {
      return res.status(404).send({ error: "Ingredients not found" });
    }
    res.status(200).send({ data: ingredients });
  } catch (error) {
    next(error);
  }
};
