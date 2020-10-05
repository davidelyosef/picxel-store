const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    en_name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    before_discount: {
        type: Number,
    },
    wishlist: {
        type: Boolean,
        default: false
    },
    images: {
        type: Array,
        default: []
    }
});
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product