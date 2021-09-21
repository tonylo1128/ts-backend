const mongoose = require("mongoose");

// const url = process.env.MONGO_DB_CONNECTION_STRING
const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connect = mongoose.connect(url, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

connect
  .then((db) => {
    console.log("connected to db");
  })

  .catch((err) => {
    console.log(err);
  });
