const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price_per_unit: { type: Number, required: true },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Grocery = mongoose.model("grocery", grocerySchema);

module.exports = Grocery;
