const apiKey = '5b3bf310160f4e5eb294e42d101cb030';
const symbol = 'FNGR';

async function fetchStockPrice() {
  try {
    const res = await fetch(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`);
    const data = await res.json();
    
    if (data.price) {
      document.getElementById('stock-price').textContent = `$${data.price}`;
      document.getElementById('last-updated').textContent = `Updated at: ${new Date().toLocaleTimeString()}`;
    } else {
      document.getElementById('stock-price').textContent = 'Error loading data';
    }
  } catch (err) {
    document.getElementById('stock-price').textContent = 'Network error';
  }
}

// Fetch every 30 seconds
fetchStockPrice();
setInterval(fetchStockPrice, 30000);
