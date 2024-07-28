import express, { urlencoded } from "express";
import { config } from "dotenv";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middleware/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
export const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: [process.env.FRONTENT_URL1, process.env.FRONTENT_URL2],
  }),
);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/category", categoryRoutes);
app.use(errorMiddleware);
