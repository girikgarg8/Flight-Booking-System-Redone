const ERROR_MESSAGES = {
  CREATE_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while creating the airplane",
  GET_ALL_AIRPLANES_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of airplanes",
  GET_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of the airplane",
  NOT_FOUND: "Requested resource not found",
  DESTROY_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while deleting the airplane",
  UPDATE_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while updating the airplane",
  CREATE_CITY_SOMETHING_WENT_WRONG:
    "Something went wrong while creating the city",
  GET_ALL_CITIES_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of cities",
  GET_CITY_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of the city",
  UPDATE_CITY_SOMETHING_WENT_WRONG:
    "Something went wrong while updating the city",
};

const MIDDLEWARE_EXPLANATIONS = {
  INVALID_MODEL_NUMBER:
    "Model Number not found in the incoming request in correct form",
  INVALID_CAPACITY:
    "Capacity not found in the incoming request in correct form",
  INVALID_CITY_NAME: "City name not found in the incoming request in correct form",
};

const SEQUELIZE_ERROR_TYPES = {
  SEQUELIZE_VALIDATION_ERROR: "SequelizeValidationError",
  SEQUELIZE_UNIQUE_CONSTRAINT_ERROR: "SequelizeUniqueConstraintError",
};

module.exports = {
  ERROR_MESSAGES,
  MIDDLEWARE_EXPLANATIONS,
  SEQUELIZE_ERROR_TYPES,
};
