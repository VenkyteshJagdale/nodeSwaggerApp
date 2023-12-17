let mongoose = require("mongoose");
dotenv = require("dotenv"),
dotenv.config();
module.exports = mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then((data) => {
    if (data) {
      console.log("Mongo Connect Successful");
    }
  })
  .catch((error) => {
    console.log("Connection Fail");
  });