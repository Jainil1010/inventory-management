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

export default productRouter;