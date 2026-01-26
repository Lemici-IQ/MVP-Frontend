import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve JSON files
app.get('/api/v1/franchises/home', (req, res) => {
  const filePath = path.join(__dirname, 'home.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read home.json' });
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/v1/franchises/listing', (req, res) => {
  const filePath = path.join(__dirname, 'listing.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read listing.json' });
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/v1/franchise/details/9789-3455-6543-3457', (req, res) => {
  const filePath = path.join(__dirname, 'details.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read details.json' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

