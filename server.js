const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route → show image
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'order.png'));
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
