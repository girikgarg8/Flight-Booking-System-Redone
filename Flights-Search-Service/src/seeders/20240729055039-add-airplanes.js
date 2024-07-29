"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Boeing737",
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing767",
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airplanes", {
      [Sequelize.Op.or]: [
        { modelNumber: "Boeing737" },
        { modelNumber: "Boeing767" },
      ],
    });
  },
};
