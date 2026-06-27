const AppError = require('./AppError');
const STATUS_CODES = require('../constants/statusCodes');

class ConflictError extends AppError {
  constructor(message = 'Conflict occurred') {
    super(message, STATUS_CODES.CONFLICT);
  }
}

module.exports = ConflictError;