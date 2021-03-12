const express = require("express");
const app = express();
const PORT = 4000;
const jsonParser = express.json();

const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use(jsonParser);
app.listen(PORT);

console.log("listening to port ..", PORT);

// const User = require("./models").user;
// const Product = require("./models").product;
// const OrderDetails = require("./models").orderdetails;
// const Order = require("./models").order;
// const Category = require("./models").category;

// app.use(express.json());
