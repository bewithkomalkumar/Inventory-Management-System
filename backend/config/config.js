require("dotenv").config({ path: "../.env" });

const Config = {
  MongoUrl: process.env.Mongo_Url,
};
module.exports = {
  Config,
};
