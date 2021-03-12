"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",  
          email: "john@doe.com",
          password: "123",
          address: "blablaStreet",
          phone: "+06861216606",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mary",
          lastName: "Doe",  
          email: "Mary@doe.com",
          password: "123",
          address: "blablaStreet",
          phone: "+06861216606",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};