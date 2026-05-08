import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { orderService } from '../services/api';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchOrders();
  }, [token, navigate]);

  const fetchOrders = async () => {
    try {
      const data = await orderService.getAll(token);
      setOrders(data.orders || []);
      setError('');
    } catch (err) {
      if (err.message.includes('Login failed') || err.message.includes('401')) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      } else {
        setError(err.message || 'Connection failed. Is the server running?');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await orderService.updateStatus(orderId, newStatus, token);
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: newStatus } : order
      ));
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'processing': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'shipped': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'delivered': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-white/10 text-white/50 border-white/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-light tracking-tight">Order Management</h1>
          <p className="text-white/40 mt-1">Manage and track your customer orders</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={fetchOrders}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
            title="Refresh Orders"
          >
            <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button 
            onClick={handleLogout}
            className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center text-red-400">
            {error}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-white/30 text-xs uppercase tracking-widest px-4">
                  <th className="pb-4 font-medium px-4">Order ID</th>
                  <th className="pb-4 font-medium px-4">Customer</th>
                  <th className="pb-4 font-medium px-4">Date</th>
                  <th className="pb-4 font-medium px-4">Total</th>
                  <th className="pb-4 font-medium px-4">Status</th>
                  <th className="pb-4 font-medium px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-20 text-white/20 italic">No orders found</td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <motion.tr 
                      key={order._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group bg-[#141414] border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <td className="py-5 px-4 rounded-l-2xl border-y border-l border-white/5 group-hover:border-white/20">
                        <span className="font-mono text-sm opacity-50">#{order._id.slice(-8).toUpperCase()}</span>
                      </td>
                      <td className="py-5 px-4 border-y border-white/5 group-hover:border-white/20">
                        <div>
                          <div className="font-medium">{order.shippingDetails?.fullName}</div>
                          <div className="text-xs text-white/40">{order.shippingDetails?.email}</div>
                        </div>
                      </td>
                      <td className="py-5 px-4 border-y border-white/5 group-hover:border-white/20">
                        <span className="text-sm opacity-60">{formatDate(order.createdAt)}</span>
                      </td>
                      <td className="py-5 px-4 border-y border-white/5 group-hover:border-white/20">
                        <span className="font-semibold">₹{order.totalAmount}</span>
                      </td>
                      <td className="py-5 px-4 border-y border-white/5 group-hover:border-white/20">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-5 px-4 rounded-r-2xl border-y border-r border-white/5 group-hover:border-white/20 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <select 
                            value={order.status}
                            onChange={(e) => updateStatus(order._id, e.target.value)}
                            className="bg-black/50 border border-white/10 rounded-lg text-xs px-2 py-1.5 focus:outline-none focus:border-white/30"
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
