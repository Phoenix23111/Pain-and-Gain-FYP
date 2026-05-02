const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    if (err.name === "CastError") {
      err.message = "Invalid ID";
    }
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };
  
  const TryCatch = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next))
      .catch((error) => next(error));
  };
  
  module.exports = { errorMiddleware, TryCatch };