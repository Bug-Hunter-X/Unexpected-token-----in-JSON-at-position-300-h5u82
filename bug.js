const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Uncommon Error: Unexpected token '}' in JSON at position 300
//This error occurs because the server may be sending a response that isn't valid JSON.  The response should be a JSON object or array.