import Product from "../models/product.model.js";

// Get products which are low in stock (less than 5 products are in stock)
export const getLowStockProducts = async (req, res, next) => {
    try {
        const threshold = 5;
        const lowInStockProducts = await Product.find({ quantity: { $lt: threshold } });

        res.status(200).json({ success: true, data: lowInStockProducts });
    } catch (error) {
        next(error);
    }
}

// Get products which are expiring soon (less than 7 days left to expire)
export const getExpiringSoonProducts = async (req, res, next) => {
    try {
        const today = new Date();
        const next7Days = new Date();
        next7Days.setDate(today.getDate() + 7);

        const expiringProduct = await Product.find({ expiryDate: { $gte: today, $lte: next7Days } });

        res.status(200).json({ syccess: true, data: expiringProduct });
    } catch (error) {
        next(error);
    }
}