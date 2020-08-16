require("dotenv").config();
const logger = require("./lib/logger");
const { connect } = require("./app/db");
const app = require("./app");
const port = 3000;

connect({
  host: process.env.DB_HOST,
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
});

app.listen(port, () => {
  logger.success(`Server runing on http://localhost:${port}`);
});
