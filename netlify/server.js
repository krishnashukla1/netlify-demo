// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Root route -> index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js server!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

//http://localhost:3000/api/hello
