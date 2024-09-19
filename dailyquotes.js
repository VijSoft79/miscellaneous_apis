const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Replace with your API-Ninjas API key
const API_KEY = 'WWk3WIqqgd+FZWXr3Q0i8w==pD96DLSGCmGNniSs';
const DAILY_QUOTES_API_URL = 'https://api.api-ninjas.com/v1/quotes?category=success';

app.get('/ninja-api', async (req, res) => {
  try {
    const response = await axios.get(DAILY_QUOTES_API_URL, {
      headers: { 'X-Api-Key': API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching daily quotes:', error);
    res.status(500).json({ error: 'Failed to fetch daily quotes' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
