const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");

router.get("/", async (req, res) => {
  const dishes = await Dish.find({ isAvailable: true });
  res.json(dishes);
});

router.post("/update/:id", async (req, res) => {
  const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dish);
});

module.exports = router;
