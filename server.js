const express = require("express");
const jsonFile = require("jsonfile");
const cors = require('cors');


const app = express();
const port = 8080;
app.use(cors())

app.get("/data", (req, res) => {
  jsonFile.readFile("./db.json", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(data.data);
    }
  });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
