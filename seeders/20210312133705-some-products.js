'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Tv",
          description: "Colourful tv",  
          price: 450,
          img: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/386271-Product-1-I_ea42ff66-091e-4395-83eb-7f99b6665317_large.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Char",
          description: "This is a Chair",  
          price: 120,
          img: "https://www.oakworld.co.uk/wp-content/uploads/2018/09/Alston-Oak-Dining-Chair-64334-64283.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
