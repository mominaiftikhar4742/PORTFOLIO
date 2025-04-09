async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,pkr');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Debugging

        if (data.bitcoin) {
            const priceUSD = data.bitcoin.usd || "N/A";
            const pricePKR = data.bitcoin.pkr || "N/A";

            document.getElementById('price-usd').textContent = `USD: $${priceUSD.toLocaleString()}`;
            document.getElementById('price-pkr').textContent = `PKR: ₨${pricePKR.toLocaleString()}`;
        } else {
            throw new Error("Invalid API response structure");
        }
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('price-usd').textContent = 'Error fetching price.';
        document.getElementById('price-pkr').textContent = 'Error fetching price.';
    }
}

// Fetch price on load and update every 60 seconds
fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);
