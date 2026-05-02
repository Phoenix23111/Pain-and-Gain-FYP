const { TryCatch } = require("../middleware/error");
const ErrorHandler  = require("../utils/utility-class");
const Product = require("../models/Product");
const rm = require("fs")



const newProduct = TryCatch(async (req, res, next) => {
    // Destructure request body for required fields
    const { name, price, stock, category } = req.body;
  
    // Check for uploaded photo
    if (!req.file) {
      return next(new ErrorHandler("Please add Photo", 400)); // Pass error to next middleware
    }
  
    const photo = req.file;
  
    // Validate all required fields are present
    if (!name || !price || !stock || !category) {
      // Function to potentially delete the uploaded file (replace with your implementation)
      function rm(filePath, callback) {
        console.log(`Deleting file: ${filePath}`);
        callback();
      }
  
      rm(photo.path, () => {
        console.log("Deleted uploaded photo");
      });
  
      return next(new ErrorHandler("Please enter All Fields", 400)); // Pass error to next middleware
    }
    
    try {
      // Create a new product using Product.create (replace with your implementation)
       await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo.path,
      });
  
      // Invalidate cache (replace with your implementation)
      //invalidateCache({ product: true, admin: true });
  
      res.status(201).json({
        success: true,
        message: "Product Created Successfully",
      });
    } catch (error) {
      // Handle any errors thrown during product creation or cache invalidation
      return next(error); // Pass error to next middleware
    }
  });
  
  
  module.exports= newProduct
  