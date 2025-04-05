// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/authRoutes.js');



const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',  // React app's address
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Routes
app.use('/', router);

// // 404 route
// app.use('ss', (req, res) => {
//   res.status(404).json({ message: "404 - Route not found" });
// });



const PORT =  5000;

// Middleware


// Database connection


 mongoose.connect('mongodb+srv://admin:admin@cluster0.ifu0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

