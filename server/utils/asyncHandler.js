// Higher-order function to wrap async/await route handlers
const asyncHandler = (fn) => (req, res, next) => {
  // Resolve the fn(req, res, next) promise and catch any errors
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;