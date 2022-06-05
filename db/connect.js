const mongoose = require("mongoose");
require('dotenv').config()

const url = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error: ", error.message))
}
module.exports = connectDB
