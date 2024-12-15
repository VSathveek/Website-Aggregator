const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = 'Enter Your API key';
const BASE_URL = 'https://newsapi.org/v2/everything';

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: 'technology',
                apiKey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
