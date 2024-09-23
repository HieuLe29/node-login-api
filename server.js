// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use('/api/users', userRoutes); // Sử dụng routes cho người dùng

const startServer = async () => {
    try {
        await sequelize.sync(); // Tạo bảng User
        console.log("User table created successfully.");

        app.listen(PORT, async() => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
};

// Gọi hàm để khởi động server
startServer();