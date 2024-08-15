const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const {
  ERROR_MESSAGES,
  MIDDLEWARE_EXPLANATIONS,
} = require("../utils/constants");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = ERROR_MESSAGES.CREATE_CITY_SOMETHING_WENT_WRONG;
    ErrorResponse.error = new AppError(
      [MIDDLEWARE_EXPLANATIONS.INVALID_CITY_NAME],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = ERROR_MESSAGES.UPDATE_CITY_SOMETHING_WENT_WRONG;
    ErrorResponse.error = new AppError(
      [MIDDLEWARE_EXPLANATIONS.INVALID_CITY_NAME],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest, validateUpdateRequest };
