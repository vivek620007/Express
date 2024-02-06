const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
require("./dataBase/dbConnection");
const api = require("./controllers/routes");

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
