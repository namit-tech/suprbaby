import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();

// SECURITY MIDDLEWARES
app.use(helmet()); // Set security HTTP headers
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const limiter = rateLimit({
  max: 100, // 100 requests per IP per 15 mins
  windowMs: 15 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in 15 minutes'
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' })); // Body parser, reading data from body into req.body
// app.use(mongoSanitize()); // Disabled due to Express 5 compatibility issue (Cannot set property query)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Logger
}

// ROUTES
app.use('/api/v1', apiRoutes);

// Error handling for undefined routes
app.all('*path', (req, res) => {
  res.status(404).json({ message: `Can't find ${req.originalUrl} on this server` });
});

// DB CONNECTION
const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI;

mongoose.connect(DB)
  .then(() => {
    console.log('DB connection successful');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB Connection Error:', err);
    process.exit(1);
  });
