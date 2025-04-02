const yup = require("yup");

const IngredientSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  calories: yup.number().min(0, "Calories must be greater than or equal to 0"),
});

module.exports = {
  IngredientSchema,
};
