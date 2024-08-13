const ERROR_MESSAGES = {
  CREATE_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while creating the airplane",
  GET_ALL_AIRPLANES_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of airplanes",
  GET_AIRPLANE_SOMETHING_WENT_WRONG:
    "Something went wrong while fetching data of the airplane",
  NOT_FOUND: "Requsted resource not found",
};

const MIDDLEWARE_EXPLANATIONS = {
  INVALID_MODEL_NUMBER:
    "Model Number not found in the incoming request in correct form",
};

const SEQUELIZE_ERROR_TYPES = {
  SEQUELIZE_VALIDATION_ERROR: "SequelizeValidationError",
};

module.exports = {
  ERROR_MESSAGES,
  MIDDLEWARE_EXPLANATIONS,
  SEQUELIZE_ERROR_TYPES,
};
