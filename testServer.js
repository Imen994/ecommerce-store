const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/auth/create-admin', (req, res) => {
  res.json({ message: 'Route works!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Test server running on port ${PORT}`));
