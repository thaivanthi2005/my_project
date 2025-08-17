const productsRouter = require("./product.router");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("client/pages/home/index");
  });

  //   app.get("/products", async (req, res) => {
  //     res.send("client/pages/products/index");
  //   });
};
