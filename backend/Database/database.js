const mongoose = require("mongoose");
const { Config } = require("../config/config");

const connectDatabase = async () => {
  const db = await mongoose.connect(Config.MongoUrl);
  return db;
};

module.exports = connectDatabase;
