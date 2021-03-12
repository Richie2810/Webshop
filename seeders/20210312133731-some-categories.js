'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Tv",
          description: "Colourful tv",  
          img: "https://callnerds.com/wp-content/uploads/2013/05/so_many_tvs.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tv",
          description: "Colourful tv",  
          img: "https://cdn.shopify.com/s/files/1/0023/4124/0950/files/Indoor_Furniture_Perth_5a730053-2ec9-4958-ba78-cef55bc9e1d6_1024x1024.jpg?v=1612229316",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};