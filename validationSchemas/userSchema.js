const yup = require("yup");
const User = require('../models/User');


const UserSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Wrong format email")
    .required("Email is required")
  
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Wrong format email"
    )
    .test("unique-email", "Email already exists", async (value) => {
      const existingUser = await User.findOne({ email: value });
      return !existingUser;
    }),
  favouriteDishes: yup.array()
    .of(yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId")),
});

module.exports = {
  UserSchema,
};
