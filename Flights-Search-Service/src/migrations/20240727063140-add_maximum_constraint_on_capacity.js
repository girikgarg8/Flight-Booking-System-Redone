"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airplanes", {
      fields: ["capacity"],
      type: "check",
      where: {
        capacity: {
          [Sequelize.Op.lte]: 1000,
        },
      },
      name: "maximum_constraint_on_capacity",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Airplanes",
      "maximum_constraint_on_capacity"
    );
  },
};
