const userRouter = require('express').Router();
const UserController = require('../controllers/User.controller');
const validateData = require("../middlewares/validation");
const {UserSchema} = require('../validationSchemas/userSchema');


userRouter.post('/', validateData(UserSchema), UserController.createOne);
userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getOne);
userRouter.put('/:userId', UserController.updateOne);
userRouter.delete('/:userId', UserController.deleteOne);

userRouter.patch('/:userId/favouriteDishes/:dishId', UserController.addToFavouriteDishes);
userRouter.delete('/:userId/favouriteDishes/:dishId', UserController.removeFromFavouriteDishes);
userRouter.get('/:userId', UserController.getFavouriteDishes);

module.exports = userRouter;