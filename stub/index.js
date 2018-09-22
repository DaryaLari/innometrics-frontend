const express = require("express");
const app = express();
app.use(express.static("dist"));
app.get("/api/getTest", (req, res) =>
  res.send({ test: 1234567890 })
);
app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
