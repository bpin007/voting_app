const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get("/user", (req, res) => {
  res.status(200).json({ message: "successfully" });
});

app.listen(PORT, () => {
  console.log(`server is runing in port${PORT}`);
});
