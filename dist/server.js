"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DATABASE_NAME;
if (!process.env.DATABASE_URI) {
    throw Error("Missing connection string");
}
const DB_URI = process.env.DATABASE_URI;
mongoose_1.default
    .connect(DB_URI, { dbName: DB_NAME })
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error("Failed to connect to MongoDB", err));
