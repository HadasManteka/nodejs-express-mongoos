const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    description:{
        type: String
    },
    price:{ 
        type: Number, required: true
    },
    image:{
        type: String
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;