import express from 'express'
import productRouter from './routes/product.routes.js';
import transactionRouter from './routes/transaction.routes.js'
import { PORT } from './config/env.js';
import connectToDatabase from './config/mongodb.js';
import errorMiddleware from  './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/transcations', transactionRouter);

app.use(errorMiddleware);

app.get('/',(req, res) => {
    res.send('Welcome to iinvenory management API');
});

app.listen(PORT, async () => {
    console.log(`API is working on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;