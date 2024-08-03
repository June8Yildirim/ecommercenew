export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    err.message = `Duplicate key ${Object.keys(err.keyValue)} that requested  ${Object.keys(err.keyValue)} has been already using.`;
    err.statusCode = 400;
  }
  if (err.name === "CastError") {
    err.message = `Invalid Product ${err.path}`;
    err.statusCode = 400;
  }
  res.status(err.statusCode).json({ success: false, message: err.message });
};

export const asyncErrorHandler = (mainFunc) => (req, res, next) => {
  Promise.resolve(mainFunc(req, res, next)).catch(next);
};
