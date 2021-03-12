const { Router } = require("express");

const Categories = require("../models").category;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

router.get("/:categoryId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.categoryId);
    console.log("what is paramID", id);
    const category = await Categories.findByPk(id);
    console.log("what is ID", id);
    res.json(category);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
