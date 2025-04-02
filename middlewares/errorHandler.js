const mongoose = require('mongoose');

module.exports.errorHandler = async (err, req, res, next) => {
  console.error(err);

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send({
      message: 'Validation error',
      details: err.errors,
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(404).send({
      message: 'Resource not found',
    });
  }

  if (err.name === 'MongoError') {
    return res.status(500).send({
      message: 'Database error',
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).send({
      message: err.message,
    });
  }

  return res.status(500).send({
    message: err.message || 'Internal server error',
  });
}; 
