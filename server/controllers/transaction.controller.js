import Product from '../models/product.model.js';
import Transaction from '../models/transcation.model.js';

// To add the detailes fo the purchased product and the transaction detailes
export const purchaseProduct = async (req, res, next) => {
    try {
        const { name, category, quantity, price, expiryDate } = req.body;;
        let product = await Product.findOne({ name });

        // Add a new product if the product does not exists else update the product quantity, price and expiry date if exixts
        if (!product) {
            product = new Product({
                name,
                category,
                quantity,
                price,
                expiryDate
            });
            await product.save();
        }
        else {
            product.quantity += quantity;
            if (price) product.price = price;
            if (expiryDate) product.expiryDate = expiryDate;
            await product.save;
        }

        // Adding the transcation detailes for the purchase
        const transaction = new Transaction({
            type: 'purchase',
            product: product._id,
            quantity,
            priceAtTime: price || product.price
        });
        await transaction.save();

        res.status(201).json({ success: true, data: product, transaction });
    } catch (error) {
        next(error);
    }
}

// Get all the transaction form the mongodb
export const getAllTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find();

        res.status(200).json({ success: true, data: transaction });
    } catch (error) {
        next(error);
    }
}

// Get a specific transaction using the product id
export const getTransactionById = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate('product');
        if (!transaction) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        
        res.status(200).json({ success: true, data: transaction });
    } catch (error) {
        next(error);
    }
}