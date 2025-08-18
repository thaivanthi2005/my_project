const homerouter = require("./home.router");
const productsRouter = require("./product.router");
module.exports = (app) => {
  app.use("/", homerouter);
  app.use("/products", productsRouter);
};
