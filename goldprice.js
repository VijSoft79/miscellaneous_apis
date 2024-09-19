const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Replace with your API-Ninjas API key
const API_KEY = 'WWk3WIqqgd+FZWXr3Q0i8w==pD96DLSGCmGNniSs';
const GOLD_PRICE_API_URL = 'https://api.api-ninjas.com/v1/goldprice';

app.get('/ninja-api', async (req, res) => {
  try {
    const response = await axios.get(GOLD_PRICE_API_URL, {
      headers: { 'X-Api-Key': API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching gold price:', error);
    res.status(500).json({ error: 'Failed to fetch gold price' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
