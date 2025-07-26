import { Router } from "express";

const transactionRouter = Router();

transactionRouter.get('/', (req, res) => {
    res.send('get all transaction');
});

transactionRouter.post('/purchase', (req, res) => {
    res.send('add a purchase');
});

transactionRouter.post('/sale', (req, res) => {
    res.send('add a sale');
});

transactionRouter.get('/purchase', (req, res) => {
    res.send('get all purchase');
});

transactionRouter.get('/sale', (req, res) => {
    res.send('get all sale');
});

export default transactionRouter;