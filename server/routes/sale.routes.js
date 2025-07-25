import { Router } from "express";

const saleRouter = Router();

saleRouter.get('/', (req, res) => {
    res.send('get all sales');
});

saleRouter.get('/:id', (req, res) => {
    res.send('get a sale');
});

saleRouter.post('/', (req, res) => {
    res.send('add a sale');
});

export default saleRouter;