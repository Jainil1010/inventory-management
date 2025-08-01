import mongoose, { Mongoose } from "mongoose";

const priceHistorySchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    marketPrice: {
        type: Number,
        required: true
    }
});

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
    purchasePrice: { 
        type: Number, 
        required: [true, 'Purchas price of the product is required'] 
    },
    marketPrice: { 
        type: Number, 
        required: [true, 'Market price of the product is required'] 
    },
    expiryDate: { 
        type: Date,
        required: true 
    },
    priceHistory: [priceHistorySchema]
}, { timestamps: true });

productSchema.pre('save', function(next){
    if (this.isNew || this.isModified('marketPrice')){
        this.priceHistory.push({
            marketPrice: this.marketPrice
        });
    }
    next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;