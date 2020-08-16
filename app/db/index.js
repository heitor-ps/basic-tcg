const mongoose = require("mongoose");
const logger = require("../../lib/logger");
const { use } = require("..");

const getUserPassString = (user, pass) => {
  if (user && pass) return `${user}:${pass}@`;
  else return "";
};

const connect = async ({ host, db, user, pass }) => {
  try {
    logger.info(`Connecting to database ${db} on ${host}...`);
    await mongoose.connect(
      `mongodb://${getUserPassString(user, pass)}${host}:61768/${db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    logger.success("Database connected successfully");
  } catch (err) {
    logger.error(err);
  }
};
module.exports = { connect };
