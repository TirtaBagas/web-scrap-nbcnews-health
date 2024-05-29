const express = require('express');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
