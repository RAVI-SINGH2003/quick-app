const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
