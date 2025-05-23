// server.js
// where your node app starts

// init project
const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definition des Blogs
const cors = require("cors");
app.use(cors());

const path = require("path");

app.set("views", path.join(__dirname, "blog"));
app.set("view engine", "ejs");

const matter = require('gray-matter');

//Alle Seiten auf HTTPS umleiten.
function checkHttps(req, res, next) {
  // protocol check, if http, redirect to https

  if (req.get("X-Forwarded-Proto").indexOf("https") != -1) {
    return next();
  } else {
    res.redirect("https://" + req.hostname + req.url);
  }
}

app.all("*", checkHttps);

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// Die statischen Seiten in public und content werden als "statisch" definiert. So können Sie direkt adressiert werden.
app.use(express.static("public"));
app.use(express.static("content"));
app.use(express.static("content/cms"));

// This is the basic-routing
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});
// Routing der index.html als /index
app.get("/index", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/feed", (request, response) => {
  response.sendFile(`${__dirname}/views/rss-feed.html`);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
