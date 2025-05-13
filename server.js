const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // استدعاء الاتصال بقاعدة البيانات

// تحميل المتغيرات البيئية من .env
dotenv.config();

// الاتصال بقاعدة البيانات
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // لقراءة JSON من Body
app.use(helmet());       // للحماية
app.use(morgan('dev'));  // لعرض الطلبات بالكونسول

// Route تجريبي
app.get('/post', (req, res) => {
    res.json({ message: 'Welcome to ShopNest API!' });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
