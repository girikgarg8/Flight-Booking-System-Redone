const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const { ERROR_MESSAGES } = require("../utils/constants");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      if (!response) {
        throw new AppError(ERROR_MESSAGES.NOT_FOUND, StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      if (!response) {
        throw new AppError(ERROR_MESSAGES.NOT_FOUND, StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: get");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: getAll");
      throw error;
    }
  }

  async update(id, data) {
    // data -> {col:value, ....}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      if (response[0] == 0) {
        // Number of affected rows is zero
        throw new AppError(ERROR_MESSAGES.NOT_FOUND, StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo: update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
