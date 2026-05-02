const User = require("../models/Users");


// Middleware to make sure only admin is allowed
const adminOnly = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(401).json({ error: "you are not logged in" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({ error: "Wrong Id" });
    }
    if (user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorised" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = adminOnly;