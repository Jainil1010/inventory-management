# Inventory Management System (Backend)

This is a **Node.js + Express** backend for a full-featured Inventory Management System using **MongoDB** as the database and **Mongoose** for modeling. The backend handles inventory tracking, purchases, and sales of products with accurate record-keeping of pricing and stock levels.

> ⚠️ *Frontend is not yet implemented, but will be added in the future.*

---

## Features

* Add, update delete products
* Record product purchases
* Record product sales
* Automatically manage stock quantities
* Price history tracking for each product
* Centralized error handling middleware
* Organized folder structure for scalability

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Nodemon** for development

---

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/Jainil1010/inventory-management.git
cd inventory-management/server
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env` file**

Create a `.env` file in the `server` folder:

```
PORT=5500
MONGODB_URI=your_mongodb_connection_uri
```

4. **Run the server**

```bash
npm run dev
```

The backend server will start on `http://localhost:5500`.

---

## API Endpoints

### Product Routes

* `GET /api/v1/products` - Get all products
* `GET /api/v1/products/:id` - Get single product
* `PUT /api/v1/products/:id/market-price` - Update product market price
* `DELETE /api/products/:id` - Delete product

### Transaction Routes

* `GET /api/v1/transaction` - Get all transactions
* `GET /api/v1/transaction/:id` - Get single transaction
* `GET /api/v1/transaction/filter` - Get sales or purchase transaction record

### Purchase Routes

* `POST /api/v1/transaction/purchase` - Record a new purchase

### Sale Routes

* `POST /api/v1/transaction/sale` - Record a new sale

### Alert Routs

* `GET /api/v1/products/low-in-stock` - Get products which has less than 5 quantity left
* `GET /api/v1/products/expirin-soon` - Get products which are expiring in 7 Days

---

## Auto Price History Feature

* Every time a product is created or the `marketPrice` is updated, the system automatically logs the change into the `priceHistory` field using a Mongoose `pre('save')` hook.

---

## Future Improvements

* ✅ Frontend using React.js
* ✅ Authentication for admin users
* ✅ Analytics Dashboard (Sales Trends, Low Stock, etc)
* ✅ Export reports (CSV, PDF)

---

## Contributing

Feel free to fork this repo and open pull requests if you find any bugs or want to improve the project.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Jainil Gohil**
GitHub: [@Jainil1010](https://github.com/Jainil1010)
