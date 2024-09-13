require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the port from the .env file, or default to 3000 if not defined
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("deployment in vercel");
});

app.get("/home", (req, res) => {
  res.send("this is home page");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


