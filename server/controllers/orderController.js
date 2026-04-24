import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newOrder
    });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort('-createdAt');
    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!order) return res.status(404).json({ message: 'No order found with that ID' });
    
    res.status(200).json({
      status: 'success',
      data: order
    });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};
