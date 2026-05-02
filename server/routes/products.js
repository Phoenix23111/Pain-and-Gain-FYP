const express = require("express");
const newProduct = require("../controller/products");
const singleUpload = require("../middleware/multer");

const router = express.Router();

//user routes
router.post("/new",singleUpload,newProduct)



module.exports = router;