const express = require("express");
const logger = require("../lib/logger");
const app = express();

app.get("/", (req, res) => {
  logger.info("GET on /");
  res.status(200).json("BASIC TCG");
});

module.exports = app;
