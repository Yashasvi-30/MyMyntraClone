const express = require('express');
const path = require('path');

const app = express();

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Define port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
