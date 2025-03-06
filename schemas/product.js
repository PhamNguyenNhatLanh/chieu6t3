const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imgUrl: { type: String },
    category: { type: String, required: true },
    description: { type: String },
    isDeleted: { type: Boolean, default: false }  
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
