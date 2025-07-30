import { Router } from "express";
import { getAllTransactions, getTransactionById, purchaseProduct, saleProduct } from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.get('/', getAllTransactions);

transactionRouter.get('/:id', getTransactionById);

transactionRouter.post('/purchase', purchaseProduct);

transactionRouter.post('/sale', saleProduct);

transactionRouter.get('/purchase', (req, res) => {
    res.send('get all purchase');
});

transactionRouter.get('/sale', (req, res) => {
    res.send('get all sale');
});

export default transactionRouter;