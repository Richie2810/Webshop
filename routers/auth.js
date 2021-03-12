const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const Users = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        message: "Please supply a valid email and password",
      });
    } else {
      const user = await Users.findOne({
        where: { email },
      });
      // console.log(password)
      // console.log(user.password)
      const passwordCorrect = bcrypt.compareSync(password, user.password);

      if (!passwordCorrect) {
        return res.status(400).send("Wrong Password");
      } else {
        res.send({
          jwt: toJWT({ user }),
        });
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
