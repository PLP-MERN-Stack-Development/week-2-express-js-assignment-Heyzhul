const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

console.log('🚀 Starting the server...');

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

