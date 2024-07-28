const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const {
  ERROR_MESSAGES,
  MIDDLEWARE_EXPLANATIONS,
} = require("../utils/constants");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = ERROR_MESSAGES.CREATE_AIRPLANE_SOMETHING_WENT_WRONG;
    ErrorResponse.error = new AppError(
      [MIDDLEWARE_EXPLANATIONS.INVALID_MODEL_NUMBER],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
