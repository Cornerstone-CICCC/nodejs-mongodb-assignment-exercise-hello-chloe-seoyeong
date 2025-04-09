import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Create server
const app = express();

// Middleware
app.use(express.json());

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
