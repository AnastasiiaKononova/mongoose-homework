const ingredientRouter = require("express").Router();
const IngredientController = require("../controllers/Ingredient.controller");
const validateData = require("../middlewares/validation");
const { IngredientSchema } = require("../validationSchemas/ingredientSchema");

ingredientRouter.post(
  "/",
  validateData(IngredientSchema),
  IngredientController.createOne
);
ingredientRouter.get("/", IngredientController.getAll);

module.exports = ingredientRouter;
