const { Router } = require("express");

const Order = require("../models").order;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const userId = req.body;
    console.log("what is ID", userId);
    if (!userId) {
      res.status(400).send("Missing user id");
    } else {
      const newOrder = await Order.create({
        userId,
      });
      res.json(newOrder);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
