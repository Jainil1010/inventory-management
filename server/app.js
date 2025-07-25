import express from 'express'
import productRouter from './routes/product.routes.js';
import saleRouter from './routes/sale.routes.js';
import purchaseRouter from './routes/purchase.routes.js';
import alertRouter from './routes/alert.routes.js';

const app = express();

const PORT = 5500;

app.use('api/v1/products', productRouter);
app.use('api/v1/sales', saleRouter);
app.use('api/v1/purchases', purchaseRouter);
app.use('api/v1/alerts', alertRouter);

app.get('/',(req, res) => {
    res.send('Welcome to iinvenory management API');
});

app.listen(PORT, () => {
    console.log(`API is working on http://localhost:${PORT}`);
});

export default app;