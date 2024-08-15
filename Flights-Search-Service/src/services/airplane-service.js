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
      throw new AppError(explanation, StatusCodes.UNPROCESSABLE_ENTITY);
    }
    throw new AppError(
      ERROR_MESSAGES.CREATE_AIRPLANE_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      ERROR_MESSAGES.GET_ALL_AIRPLANES_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw error;
    }
    throw new AppError(
      ERROR_MESSAGES.GET_AIRPLANE_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw error;
    }
    throw new AppError(
      ERROR_MESSAGES.DESTROY_AIRPLANE_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane({ id, capacity }) {
  try {
    const response = await airplaneRepository.update(id, { capacity });
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw error;
    }
    throw new AppError(
      ERROR_MESSAGES.UPDATE_AIRPLANE_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
