function ErrorHandler(message, statusCode) {
    // Set the error message using the provided value or a default
    this.message = message || "Internal Server Error";
  
    // Set the status code using the provided value or a default
    this.statusCode = statusCode || 500;
  
    // Call the built-in Error constructor to preserve prototype chain
    Error.call(this, message);
  
    // Optional: Set the error name for more specific identification
    // (Uncomment if desired)
    // this.name = "ErrorHandler";
  }
  
  // Inherit properties from the built-in Error class
  ErrorHandler.prototype = Object.create(Error.prototype);
  ErrorHandler.prototype.constructor = ErrorHandler;
  
  // Export the ErrorHandler class as the default export
module.exports = ErrorHandler;