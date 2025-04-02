const { Dish, Ingredient } = require("../models");
const { UPLOAD_PATH } = require("../configs/app.config");
const path = require("path");

module.exports.createOne = async (req, res, next) => {
  try {
    const {
      body: { name, description, ingredients },
    } = req;
    const photo = path.join(UPLOAD_PATH, req.file.filename);
    const newDish = await Dish.create({
      name,
      description,
      ingredients,
      photo,
    });
    res.status(201).send({ data: newDish });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    let query = {};
    const ingredientIds = req.query.ingredients ?? [];
    if (ingredientIds.length > 0) {
      query.ingredients = { $in: ingredientIds };
    }
    console.log(req.query.ingredients);
    const dishes = await Dish.find(query).populate("ingredients");
    res.status(200).send({ data: dishes });
  } catch (error) {
    next(error);
  }
};

module.exports.updateOne = async (req, res, next) => {
  try {
    const {
      params: { dishId },
      body,
    } = req;
    let updateData = { ...body };
    if (req.file) {
      updateData.photo = path.join(UPLOAD_PATH, req.file.filename);
    }
    const updatedDish = await Dish.findByIdAndUpdate(dishId, updateData, {
      new: true,
    }).populate("ingredients");
    res.status(200).send({ data: updatedDish });
  } catch (error) {
    next(error);
  }
};
