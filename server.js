const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Example route handler for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Example route handler for a product page
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    // Here you would fetch product details from a database or API
    res.send(`Product Page for ID ${productId}`);
});

// Example route handler for a category page
app.get('/category/:name', (req, res) => {
    const categoryName = req.params.name;
    // Here you would fetch products under this category
    res.send(`Category Page for ${categoryName}`);
});

// Example route handler for handling search queries
app.get('/search', (req, res) => {
    const query = req.query.q;
    // Here you would perform a search based on the query
    res.send(`Search results for query: ${query}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
