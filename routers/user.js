const { Router } = require("express");

const Users = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => res.send("Welcome to users!"));

module.exports = router;
