const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { ERROR_MESSAGES, SEQUELIZE_ERROR_TYPES } = require("../utils/constants");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === SEQUELIZE_ERROR_TYPES.SEQUELIZE_VALIDATION_ERROR) {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      ERROR_MESSAGES.CREATE_AIRPLANE_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
};
