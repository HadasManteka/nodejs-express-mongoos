const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    firstName: {
        type: String, required: true
    },
    surName:{
        type: String, required: true
    },
    totalPrice:{ 
        type: Number, required: true
    },
    products:{
        type: [String, String]
    }
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;