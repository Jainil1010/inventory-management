import { Router } from "express";
import { deleteProduct, getAllProducts, getProductById } from "../controllers/product.controller.js";
import { getExpiringSoonProducts, getLowStockProducts } from "../controllers/alert.controller.js";

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.delete('/:id', deleteProduct);

productRouter.get('/alerts/low-stock', getLowStockProducts);

productRouter.get('/alerts/expiring-soon', getExpiringSoonProducts);

export default productRouter;