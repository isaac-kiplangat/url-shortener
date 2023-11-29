// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();
import shortid from'shortid'; // Install using: npm install shortid

const port = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const urlStore = new Map(); // In-memory store for URL mapping

// Example API endpoint for URL shortening
app.post('/api/shorten-url', (req, res) => {
  const { originalUrl } = req.body;

  // Check if the URL is already shortened
  if (urlStore.has(originalUrl)) {
    const shortUrl = urlStore.get(originalUrl);
    res.json({ originalUrl, shortUrl });
  } else {
    // Generate a unique key for the shortened URL
    const shortUrlKey = shortid.generate();
    const shortUrl = `http://localhost:${port}/${shortUrlKey}`;

    // Store the mapping in the in-memory store
    urlStore.set(originalUrl, shortUrl);

    res.json({ originalUrl, shortUrl });
  }
});

// Example API endpoint for redirecting to the original URL
app.get('/:shortUrlKey', (req, res) => {
  const shortUrlKey = req.params.shortUrlKey;
  const originalUrl = [...urlStore.entries()].find(([, value]) => value.endsWith(shortUrlKey));

  if (originalUrl) {
    res.redirect(originalUrl[0]);
  } else {
    res.status(404).json({ message: 'Shortened URL not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
