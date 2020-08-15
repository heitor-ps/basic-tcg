const chalk = require("chalk");
const moment = require("moment");

const getPrefix = (type) => {
  const now = moment().format("DD-MM-YYYY HH:mm:ss.SSS");
  return `[${type}][${now}]: `;
};

const info = (msg) => {
  console.log(chalk.blue(getPrefix(" INFO  ")) + msg);
};

const error = (msg) => {
  console.log(chalk.red(getPrefix(" ERROR ")) + msg);
};

const warn = (msg) => {
  console.log(chalk.yellow(getPrefix(" WARN  ")) + msg);
};

const success = (msg) => {
  console.log(chalk.green(getPrefix("SUCCESS")) + msg);
};

module.exports = { info, error, warn, success };
