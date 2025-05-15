const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  dishId: String,
  quantity: Number,
  totalAmount: Number,
  deliveryTime: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
