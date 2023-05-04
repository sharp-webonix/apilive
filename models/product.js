const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
    company: {
        type:String,
        enum: {
            values:["HP","Lenovo"],
            message: "{VALUE} is not a valid company"
        },
    },
});

module.exports = mongoose.model("Product" , productSchema);

