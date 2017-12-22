// install packages after creating server folder and index file.
// After install I setup a basic express server
// create your .env file and bring in the dotenv package
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");

const port = process.env.SERVER_PORT || 3001;
const connectionString = process.env.CONNECTION_STRING;

const app = express();

// massive connection to database
// Make sure to test the db is connected
// after the db is connected and the errors resolved,
// test the full connection using axios from react

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => err);

// Basic Middlewares

console.log("HIT");

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 10000
    }
  })
);

app.use("/api/test", (req, res, next) => {
  app
    .get("db")
    .users.find({})
    .then(response => {
      res.json(response);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// After the server is setup, make sure to add your proxy to your package.json
// I usually test my server connection to make sure everything is setup.
// resolve any errors in the terminal then test in postman with a test endpoint.
// Once I know the server is running I'll connect my database.
