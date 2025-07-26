import mongoose from "mongoose";

const transcationSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['purchase', 'sale'], 
        required: [true, 'Type of trancaction is required'] 
    },
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true,
        index: true
    },
    quantity: { 
        type: Number, 
        required: [true, 'Quantity is required'] 
    },
    priceAtTime: { 
        type: Number, 
        required: [true, 'Price is required'] 
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transcation', transcationSchema);

export default Transaction;