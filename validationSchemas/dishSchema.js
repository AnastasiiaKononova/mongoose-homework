const yup = require('yup');

const DishSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must be at most 100 characters'),
  description: yup.string().required('Description is required').min(50, 'Description must be at least 10 characters')
  .max(1000, 'Description must be at most 1000 characters'),
  ingredients: yup.array().of(yup.string().matches(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId')).min(1, 'At least one ingredient is required')
});

module.exports = {
  DishSchema,
};