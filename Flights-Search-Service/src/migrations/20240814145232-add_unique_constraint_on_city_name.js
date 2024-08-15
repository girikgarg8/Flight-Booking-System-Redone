"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Cities", {
      fields: ["name"],
      type: "unique",
      name: "city_name",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Cities",
      "city_name"
    );
  },
};
