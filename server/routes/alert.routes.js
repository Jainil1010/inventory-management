import { Router } from "express";

const alertRouter = Router();

alertRouter.get('/low-stock', (req, res) => {
    res.send('get low in sotck products');
});

alertRouter.get('/expired', (req, res) => {
    res.send('get a expired products');
});

export default alertRouter;