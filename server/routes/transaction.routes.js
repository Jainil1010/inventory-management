import { Router } from "express";
import { getAllTransactions, getTransactionById, purchaseProduct } from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.get('/', getAllTransactions);

transactionRouter.get('/:id', getTransactionById);

transactionRouter.post('/purchase', purchaseProduct);

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