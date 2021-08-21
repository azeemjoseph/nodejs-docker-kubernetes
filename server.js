const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const woodfrog = require("./routes/wood-frog");

console.log('process.env.MONGO_USER :', process.env.MONGO_USER );
console.log('process.env.MONGO_PASSWORD :', process.env.MONGO_PASSWORD);
console.log('process.env.MONGO_DB :', process.env.MONGO_DB);
console.log('process.env.MONGO_CLUSTER :', process.env.MONGO_CLUSTER);

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const path = __dirname + "/views/";
const PORT = process.env.PORT || 8080;

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use("/woodfrog", woodfrog);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });

// router.use(function (req, res, next) {
//   console.log("/" + req.method);
//   next();
// });

// router.get("/", function (req, res) {
//   res.sendFile(path + "index.html");
// });

// router.get("/wood-frog", function (req, res) {
//   res.sendFile(path + "wood-frog.html");
// });

// app.use(express.static(path));
// app.use("/", router);

// // app.listen(PORT, function () {
// //   console.log('Example app listening on port 8080!')
// // })


