import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerInfo: {
    type: Object,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
