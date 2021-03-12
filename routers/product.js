const { Router } = require("express");

const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (e) {
    next;
  }
});

module.exports = router;
