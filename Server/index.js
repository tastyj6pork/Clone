const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 4000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "zkbbs",
});

app.use(cors({ credentials:true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {

    const sqlSelect = 
        "SELECT * FROM hansot";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get", (req, res) => {
    const sqlSelect = 
        "SELECT * FROM hansot";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req,res) => {

    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    const sqlInsert = 
        "INSERT INTO hansot (userName, userPassword) VALUES (?,?)";
    db.query(sqlInsert, [userName, userPassword], (err, result) => {
        console.log(result);
    });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});