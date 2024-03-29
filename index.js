import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConnecton.js";
import { productRoute } from "./routes/productRoutes.js";
import { orderRoute } from "./routes/orderRoutes.js";

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Server is working fine 😊"));

app.listen(port, () => console.log(`Server is listening on port ${port}! 😎`));

app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
