const mongoose = require("mongoose");

mongoose
  .connect("mongodb://reviews_db:27017/reviewsdb", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
