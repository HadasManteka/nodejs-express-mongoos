const express = require("express");
const app = express();
const port = process.env.PORT;
const DB = require("./controller/database");
const Product = require("./models/product");

//  MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get products
app.post("/products", async (req, res) => {
    const products = await Product.find({});
    console.log(products);
});


//  Save products
app.post("/product", (req, res) => {
//   let newProduct = new Product(req.body);

//   newProduct.save((err, data) => {
//     res.header({
//       "Content-Type": "application/json",
//     });
//   });
});

app.listen(5000, () => console.log(`SERVER listening on port ${5000}!`));