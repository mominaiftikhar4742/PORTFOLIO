const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  deliveryFee: Number,
  image: String,
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("Dish", DishSchema);
