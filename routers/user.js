const { Router } = require("express");
const bcrypt = require("bcrypt");

const Users = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => res.send("Welcome to users!"));

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, firstName } = req.body;
    console.log("what is req", req.body);
    if ((!email, !password, !firstName)) {
      res
        .status(400)
        .send("Missing Parameters, Email,Password and fullName needed.");
    } else {
      const newUser = await Users.create({
        email,
        password: bcrypt.hashSync(password, 10),
        firstName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
