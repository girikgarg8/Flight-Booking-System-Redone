const express = require("express");
const { CityMiddlewares } = require("../../middlewares");
const { CityController } = require("../../controllers");

const router = express.Router();

router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

router.get("/", CityController.getCities);

router.get("/:id", CityController.getCity);

router.patch(
  "/:id",
  CityMiddlewares.validateUpdateRequest,
  CityController.updateCity
);

router.delete("/:id", CityController.deleteCity);

module.exports = router;
