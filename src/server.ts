import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes";
dotenv.config();

// Create server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouter);

// Fallbask
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: `Invalid Route` });
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DATABASE_NAME;
if (!process.env.DATABASE_URI) {
  throw Error("Missing connection string");
}
const DB_URI = process.env.DATABASE_URI;

mongoose
  .connect(DB_URI, { dbName: DB_NAME })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));
