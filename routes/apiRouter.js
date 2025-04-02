const apiRouter = require('express').Router();
const dishRouter = require('./dishRouter');
const ingredientRouter = require('./ingredientRouter');
const userRouter = require('./userRouter');

apiRouter.use('/users', userRouter);
apiRouter.use('/dishes', dishRouter);
apiRouter.use('/ingredients', ingredientRouter);
 

 
module.exports = apiRouter;