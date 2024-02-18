import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { customerInfo, cart, totalAmount } = req.body;

    if (!customerInfo || !cart || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const order = new Order({ customerInfo, cart, totalAmount });

    await order.save();

    res.status(201).json({ message: "Order submitted successfully",order });
  } catch (error) {
    console.error("Error submitting order:", error);
    res
      .status(500)
      .json({ message: "Failed to submit order. Please try again." });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).json({ message: "Failed to get ordeٖrs" });
  }
};
