const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "hi there" });
});

app.listen(5000);
