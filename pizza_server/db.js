const mongoose =require("mongoose");


var mongoURL =
  "mongodb+srv://saiteja:saiteja123@cluster0.7cshu.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;



db.on("connected", () => {
  console.log("Mongdb connection successful");
});

db.on("error", () => {
  console.log("Mongodb connection failed");
});

module.exports = mongoose;
