const mongoose = require("mongoose");
const logger = require("../../lib/logger");

const connect = async (host, db, user, pass) => {
  try {
    logger.info(`Connecting to database ${db} on ${host}...`);
    await mongoose.connect(`mongodb://${host}:61768/${db}`, {
      user,
      pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.success("Database connected successfully");
  } catch (err) {
    logger.error(err);
  }
};
module.exports = { connect };
