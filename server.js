const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const db = require("./db");
const router = require("./routes");

//database connection

db.connect();

//middle ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//routes

app.use("/api", router); 

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../frontend/build")));

// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
//   } catch (e) {
//     res.send("Oops! unexpected error");
//   }
// });


//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});

