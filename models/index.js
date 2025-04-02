const mongoose = require("mongoose");
const User = require('./User');
const Dish = require("./Dish");
const Ingredient = require("./Ingredient");
const { MONGODB_URI, DB_NAME } = require("../configs/app.config");

const connectDb = () => {
  try {
    mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
    });
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
    process.exit(1);
  }
};
connectDb();
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected!");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});
module.exports = {
  Ingredient,
  Dish,
  User
};
