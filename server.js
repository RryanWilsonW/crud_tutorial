const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROute
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});
//Set port to listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`THe Server is running on port ${PORT}`);
});
