const express = require('express');
const bodyParer = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host:conf.host,
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
})

connection.connect();

app.get('/api/customers',(req,res)=>{

  connection.query(
    "select * from customer",
    (err,rows,fields)=>{
        res.send(rows);
    }
  )

})

app.listen(port,()=>{
    console.log(port+'번 포트로 서버대기');
})