const mongoose = require('mongoose');

const CollectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});
const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection