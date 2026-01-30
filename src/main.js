import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// 1. Cấu hình biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL;

console.log(`📡 Database URL: ${DB_URL ? 'Connected' : 'Missing'}`);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "🚀 ABC Technology - ExpressJS Template is Running!",
    status: "Success",
    timestamp: new Date().toISOString() 
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại: http://localhost:${PORT}`);
});