const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Name"],
  },
  photo: {
    type: String,
    required: [true, "Please enter Photo"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Price"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Stock"],
  },
  category: {
    type: String,
    required: [true, "Please enter Category"],
    trim: true,
  },
},
{
  timestamps: true,
}
);
  const product = mongoose.model("products", ProductSchema);
  product.createIndexes();
  const ProductModel = product
  
  module.exports = ProductModel;