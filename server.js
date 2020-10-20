const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

app.set('view-engine', 'ejs')

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/items", items);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
