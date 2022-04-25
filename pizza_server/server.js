const express = require("express");
const Pizza = require("./models/pizzaModel");
const app = express();
const db = require("./db");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working ");
});
app.get("/getpizzas", (req, res) => {
    Pizza.find({}, (err, desc) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(desc);
        }
  })
});
const port = 5000;

app.listen(port, () => {
  console.log(`server running on ${port} `);
});
