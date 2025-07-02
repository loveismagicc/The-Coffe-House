// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./src/routes/user.routes');
const productRoutes = require('./src/routes/product.routes');
const cartRoutes = require('./src/routes/cart.routes');
const orderRoutes = require('./src/routes/order.routes');
const addressRoutes = require('./src/routes/address.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
console.log("Mongo URI:", process.env.MONGODB_URI);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/address', addressRoutes);

// Health check route
app.get('/', (req, res) => {
    res.send('Himewari Kawwai...... <3');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
