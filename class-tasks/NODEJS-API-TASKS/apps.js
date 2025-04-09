const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (CSS)
app.use(express.static('public'));

// Route to fetch and display Bitcoin price
app.get('/', async (req, res) => {
    try {
        // Fetch Bitcoin price from CoinGecko API
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const bitcoinPrice = response.data.bitcoin.usd;

        // Get current date and time
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        // Send HTML response with Bitcoin price and date/time
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bitcoin Price Tracker</title>
                <style>
                    /* Basic Reset */
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    /* Body Styling */
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        color: #333;
                    }

                    /* Container Styling */
                    .container {
                        text-align: center;
                        background-color: #fff;
                        padding: 2rem;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    /* Heading Styling */
                    h1 {
                        font-size: 2rem;
                        margin-bottom: 1rem;
                        color:rgb(6, 54, 49);
                    }

                    /* Card Styling */
                    .card {
                        background-color: #f9f9f9;
                        padding: 1.5rem;
                        border-radius: 8px;
                        margin-bottom: 1.5rem;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    .card p {
                        font-size: 1.2rem;
                        margin: 0.5rem 0;
                    }

                    /* Button Styling */
                    button {
                        background-color:rgb(6, 42, 40);
                        color: white;
                        border: none;
                        padding: 0.8rem 1.5rem;
                        font-size: 1rem;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    button:hover {
                        background-color:rgb(13, 73, 64);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Bitcoin Price Tracker</h1>
                    <div class="card">
                        <p><strong>Price:</strong> $${bitcoinPrice}</p>
                        <p><strong>Date and Time:</strong> ${formattedDate}</p>
                    </div>
                    <button onclick="window.location.reload()">Refresh</button>
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send('Error fetching Bitcoin price');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
