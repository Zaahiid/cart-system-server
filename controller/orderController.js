import Stripe from "stripe";
import Order from "../models/orderModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

export const createOrder = async (req, res) => {
  try {
    const { customerInfo, cart, totalAmount } = req.body;

    if (!customerInfo || !cart || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const order = new Order({ customerInfo, cart, totalAmount });

    await order.save();

    res.status(201).json({ message: "Order submitted successfully", order });
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

export const checkout = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: session.id });
};
