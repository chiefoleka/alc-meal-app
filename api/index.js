let express = require('express');

// Set up the express app
const app = express();

const PORT = 8080;

app.get('*', (req, res) => {
  res.status(200).send("Hello World")
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});