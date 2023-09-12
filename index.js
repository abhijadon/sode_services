const express = require("express");
const con = require("./middleware/mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
port = process.env.PORT || 5000;
const app = express();
fs = require("fs");
qs = require("querystring");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({ origin: ["http://localhost:3000", "https://sode-services-wmcx.vercel.app"] })
);
dotenv.config();
const http = require("http");

//production build react
const path = require("path");
app.use(express.static(path.resolve(__dirname, "frontend", "build")));
app.set("views", __dirname + "/frontend");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("dataFrom.html");
});
//Api routes are available
app.use("/api", require("./routes/email"));
app.use("/api", require("./routes/sheet"));
app.use("/api", require("./routes/form"));
app.use("/api", require("./routes/payment"));

//connect to localhost
app.listen(port, () => {
  console.warn(`Connected to app at http://localhost:${port} successfully`);
});
