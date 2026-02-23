import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import verifyToken from "./middleware/verifyToken.js";
import documentsRouter from "./routes/documents.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Public routes (no auth required)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Protected routes (require authentication)
app.use("/documents", verifyToken, documentsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
