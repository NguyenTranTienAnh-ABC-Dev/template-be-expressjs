import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// 1. Khởi tạo cấu hình (ConfigModule.forRoot)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "🚀 ABC Technology - ExpressJS (Nest-Style) is Running!",
    version: "0.0.1"
  });
});
app.listen(PORT, () => {
  console.log('─'.repeat(45));
  console.log(`✅ Server started at: http://localhost:${PORT}`);
  console.log('─'.repeat(45));
});