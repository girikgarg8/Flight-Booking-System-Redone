const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { ERROR_MESSAGES, SEQUELIZE_ERROR_TYPES } = require("../utils/constants");
const AppError = require("../utils/errors/app-error");

const { SEQUELIZE_VALIDATION_ERROR, SEQUELIZE_UNIQUE_CONSTRAINT_ERROR } =
  SEQUELIZE_ERROR_TYPES;

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name === SEQUELIZE_VALIDATION_ERROR ||
      error.name === SEQUELIZE_UNIQUE_CONSTRAINT_ERROR
    ) {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.UNPROCESSABLE_ENTITY);
    }
    throw new AppError(
      ERROR_MESSAGES.CREATE_CITY_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      ERROR_MESSAGES.GET_ALL_CITIES_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(data) {
  try {
    const city = await cityRepository.get(data);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) throw error;
    throw new AppError(
      ERROR_MESSAGES.GET_CITY_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity({ id, name }) {
  try {
    const response = await cityRepository.update(id, { name });
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw error;
    }
    throw new AppError(
      ERROR_MESSAGES.UPDATE_CITY_SOMETHING_WENT_WRONG,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(data) {
  try {
    const response = await cityRepository.destroy(data);
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

module.exports = { createCity, getCities, getCity, updateCity, destroyCity };
