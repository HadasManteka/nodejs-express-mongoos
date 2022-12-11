const express = require("express");
const app = express();
const port = process.env.PORT;
const DB = require("./controller/database");
const Product = require("./models/product");
// const axios = require('axios');
const Cart = require("./models/cart");
const { header } = require("express/lib/request");
// const https = require('https');
const request = require('request');
const cors = require('cors');

//  MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

let images = [];

// Get cooktails images
request.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', function (error, response, body) {
    JSON.parse(body).drinks.map(drink=>{
        images.push(drink.strDrinkThumb);
    });
})
.on("error", function(err) {
    console.log('Error from the cocktaildb API: ' + err);
});

// Get products
app.get("/products", async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const products = await Product.find({});
    products.map(product => product._doc);
    
    // Attach photo to data
    let index = 0;
    products.map(product => {product.image=images.at(index); index++;});
    res.json(products);
    res.end();
});

// Cart mutations

app.post("/sendCart", (req, res) => {
    let newCart = new Cart(req.body);
    newCart.save()
    .then(cart => {
        res.send("cart saved!");
    }) 
    .catch(err => {
        res.status(400).send("unable to save to database");
    })
});

app.listen(5000, () => console.log(`SERVER listening on port ${5000}!`));