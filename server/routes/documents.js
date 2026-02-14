import express from "express";
const router = express.Router();

// Sample data - replace with your database
let data = {
  "sambankman@gmail.com": [
    "i am sorry",
    "not my fault",
    "binance is bad",
    "kevin is my best friend",
  ],
  "caroline@alameda.com": [
    "stop loss is bad",
    "comfortable with risk",
    "never lost a trade",
    "alameda rocks!",
  ],
};

/**
 * GET /documents
 * Returns documents for the authenticated user
 * Requires verifyToken middleware
 */
const getDocuments = async (req, res) => {
  try {
    const email = req.user.email;

    // Get user's documents or return empty array
    const userDocuments = data[email] || [];
    
    res.status(200).json(userDocuments);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ error: "Failed to fetch documents" });
  }
};

router.get("/", getDocuments);

export default router;
