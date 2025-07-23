const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;
  const order = new Order({ userId: req.user.id, products, totalAmount });
  await order.save();
  res.status(201).json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
