import express from "express";
import {
  checkout,
  createOrder,
  getAllOrders,
} from "../controller/orderController.js";

const router = express.Router();

router
  .get("/", getAllOrders)
  .post("/", createOrder)
  .post("/checkout", checkout);

export { router as orderRoute };
