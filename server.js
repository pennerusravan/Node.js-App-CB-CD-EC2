const express = require('express');
const app = express();

// Disable caching
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/', (req, res) => {
  res.send('Order App Running without CodeBuild & Lambda');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App running on port 3000');
});
