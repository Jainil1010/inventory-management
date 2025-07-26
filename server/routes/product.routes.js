import { Router } from "express";

const productRouter = Router();

productRouter.get('/', (req, res) => {
    res.send('get all products');
});

productRouter.get('/:id', (req, res) => {
    res.send('get a product');
});

productRouter.post('/', (req, res) => {
    res.send('add a new product');
});

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