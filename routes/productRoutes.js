import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controller/productController.js";
const router = express.Router();

router
.get("/",getAllProducts)
.post("/",createProduct)
.patch("/:id", updateProduct)
.delete("/:id",deleteProduct)

export {router as productRoute}