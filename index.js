const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connection");
const mongoose = require("mongoose");
const cookies = require("cookie-parser");
const cors = require("cors");
// const bodyParser= require('body-parser')

//App configuration
const app = express();

app.use(cookies());

// dotenv.config({ path: "config.env" });

dotenv.config({ path: ".env" });
connectDB();

//because we can't access the body in the postman we use the middleware below
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "https:hire-purchase-frontend.vercel.app",
    origin: "http://localhost:3000",
  })
);

const port = process.env.PORT || 4000;
app.use("/", require("./router/routes"));

app.get("/", (req, res) => {
  res.send("hello solobachi from express");
});

app.listen(port, () =>
  console.log("express server is Listening on http://localhost:" + port)
);
