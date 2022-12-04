const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
    type: String, trim: true, required: true, unique: 'name already used!'
    },
    price:{ 
        type: Number, trim: true, required: true
    },
    description:{
        type: String
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;