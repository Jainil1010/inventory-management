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
    unitPrice: { 
        type: Number, 
        required: [true, 'Unit Price is required'] 
    },
    totalPrice: { 
        type: Number, 
        required: [true, 'Total Price is required'] 
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transcation', transcationSchema);

export default Transaction;