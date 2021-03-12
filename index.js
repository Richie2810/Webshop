const express = require("express");
const app = express();
const PORT = 4000;
const jsonParser = express.json();

const auth = require("./routers/auth");
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const orderRouter = require("./routers/order");

app.use(jsonParser);
app.use("/auth", auth);
app.use("/order", orderRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(PORT);

console.log("listening to port ..", PORT);

// const User = require("./models").user;
// const Product = require("./models").product;
// const OrderDetails = require("./models").orderdetails;
// const Order = require("./models").order;
// const Category = require("./models").category;

// app.use(express.json());
