import { Router } from "express";
import { filterTransactionByType, getAllTransactions, getTransactionById, purchaseProduct, saleProduct } from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.get('/', getAllTransactions);

transactionRouter.get('/filter', filterTransactionByType);

transactionRouter.get('/:id', getTransactionById);

transactionRouter.post('/purchase', purchaseProduct);

transactionRouter.post('/sale', saleProduct);

export default transactionRouter;