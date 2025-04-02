const dishRouter = require("express").Router();
const DishController = require("../controllers/Dish.controller");
const upload = require("../middlewares/multer");
const validateData = require("../middlewares/validation");
const { DishSchema } = require("../validationSchemas/dishSchema");

dishRouter.post(
  "/",
  upload.single("photo"),
  validateData(DishSchema),
  DishController.createOne
);
dishRouter.get('/', DishController.getAll);
dishRouter.put("/:dishId", upload.single("photo"), validateData(DishSchema), DishController.updateOne);

module.exports = dishRouter;
