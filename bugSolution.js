const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const response = {
    message: 'Hello, world!'
  };
  res.json(response);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});