import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.put('/:id', (req, res) => {
    res.send('update a product');
});

productRouter.delete('/:id', (req, res) => {
    res.send('delete a product');
});

productRouter.get('/alerts/low-stock', (req, res) => {
    res.send('get alerts for products which are low in stock');
});

productRouter.get('/alerts/expiring-soon', (req, res) => {
    res.send('get alerts for products which are expiring soon');
});

export default productRouter;