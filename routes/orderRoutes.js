import express  from "express";
import { createOrder, getAllOrders } from "../controller/orderController.js";

const router = express.Router();

router
.get("/",getAllOrders)
.post("/", createOrder)

export {router as orderRoute}