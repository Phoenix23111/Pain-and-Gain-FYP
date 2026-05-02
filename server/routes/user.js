
const  { newUser, fetchAllUser,fetchUser,deleteUser } = require("../controller/user")

const express = require("express")
const adminOnly = require("../middleware/adminonly");

const router = express.Router();

//user routes
router.post("/new",newUser)
router.post("/all",adminOnly,fetchAllUser)
router.route("/:id").post(fetchUser).delete(adminOnly,deleteUser)


module.exports = router;