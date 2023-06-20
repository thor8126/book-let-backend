require('dotenv').config();
const mongoose = require("mongoose");

module.exports = mongoose
.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

