const logger = require("./lib/logger");
const db = require("./app/db")
require ("dotenv").config();
const app = require("./app");
const port = 3000;

db.connect(
  process.env.DB_HOST,
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD
)

app.listen(port, () => {
  logger.success(`Server runing on http://localhost:${port}`);
});
