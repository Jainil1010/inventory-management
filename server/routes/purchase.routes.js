import { Router } from "express";

const purchaseRouter = Router();

purchaseRouter.get('/', (req, res) => {
    res.send('get all purchase');
});

purchaseRouter.get('/:id', (req, res) => {
    res.send('get a purchase');
});

purchaseRouter.post('/', (req, res) => {
    res.send('add a purchase');
});

export default purchaseRouter;