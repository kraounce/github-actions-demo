const express = require("express");

const app = express();

const unused = "CI test";

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});