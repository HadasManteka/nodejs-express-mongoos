// require('dotenv').config();
const mongoose = require("mongoose");
const server = process.env.DBURL;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect('mongodb+srv://HADAS:Aa12345678@ourdb.vya9p.mongodb.net/local_library?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error:" + err);
      });
  }
}

module.exports = new Database();