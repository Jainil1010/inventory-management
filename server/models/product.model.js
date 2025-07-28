import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name of the product is rquired']
    },
    category: { 
        type: String 
    },
    quantity: { 
        type: Number, 
        required: [true, 'Quantity of product is required']
    },
    price: { 
        type: Number, 
        required: [true, 'Pricde of the product is required'] 
    },
    expiryDate: { 
        type: Date,
        require: true 
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;