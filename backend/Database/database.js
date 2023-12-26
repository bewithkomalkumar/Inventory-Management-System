const mongoose = require("mongoose");

const connectDatabase = async () => {
  const db = await mongoose.connect(
    `mongodb+srv://komalkumar:komal123@cluster0.cmcdqto.mongodb.net/IMS`
  );
  return db;
};

module.exports = connectDatabase;
