// const { dishSchema } = require("../validationSchemas/dishSchema");
// const { ingredientSchema } = require("../validationSchemas/ingredientSchema");
// const { userSchema } = require("../validationSchemas/userSchema");
// const yup = require("yup");

const validateData = (schema) => async (req, res, next) => {
  try {
    console.log(req.body);
    // console.log(schema);
    // console.log(req.body);
    // yup
    //   .object()
    //   .shape({
    //     name: yup
    //       .string()
    //       .required("Name is required")
    //       .min(2, "Name must be at least 2 characters long"),
    //     calories: yup
    //       .number()
    //       .min(0, "Calories must be greater than or equal to 0"),
    //   })
    console.log("DISH BEFORE VALIDATION");
    await schema.validate(req.body);
    console.log("DISH AFTER VALIDATION");
    // await schema.validate(req.body);
    // switch (type) {
    //   case 'dish':
    //     await dishSchema.validate(req.body);
    //     break;
    //   case 'ingredient':
    //     await ingredientSchema.validate(req.body);
    //     break;
    //   case 'user':
    //     await userSchema.validate(req.body);
    //     break;
    //   default:
    //     return res.status(400).send('Invalid validation type');
    // }
    next();
  } catch (error) {
    return res.status(400).send(`Ошибка валидации: ${error.message}`);
  }
};

module.exports = validateData;
