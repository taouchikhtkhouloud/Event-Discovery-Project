const express = require("express");
const app = express();
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "khouloud",
  database: "login"
})

app.get("/", (req,res) => {
    res.send("hello world");
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

const PORT = process.env.PORT || 8090;

app.listen(PORT, console.log(`Server starting on port ${PORT}`));
