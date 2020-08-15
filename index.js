const logger = require("./lib/logger");
const app = require("./app");
const port = 3000;

app.listen(port, () => {
  logger.success(`Server runing on http://localhost:${port}`);
});
