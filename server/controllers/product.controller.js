import Product from "../models/product.model.js";

// Get all the products form the mongodb
export const getAllProducts = async (req, res, next) => {
    try {
        const product = await Product.find();

        res.status(200).json({ success: true, data: product })
    } catch (error) {
        next(error);
    }
}

// Get a specific product using the product id
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
}

// Delete a product from the mongodb
export const deleteProduct = async (req, res, next) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.paranns.id);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success: true, data: deleteProduct });
    } catch (error) {
        next(error);
    }
}

// Update the market price of the product
export const updateMarketPrice = async (req, res, next) => {
    try {
        const { marketPrice } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }

        product.marketPrice = marketPrice;
        await product.save();

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
}
