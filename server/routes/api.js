import express from 'express';
import { login } from '../controllers/authController.js';
import { 
  createOrder, 
  getAllOrders, 
  updateOrderStatus 
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/orders', createOrder);
router.post('/login', login);

// Protected Admin routes
router.use(protect); // All routes below this line are protected
router.get('/orders', getAllOrders);
router.patch('/orders/:id', updateOrderStatus);

export default router;
