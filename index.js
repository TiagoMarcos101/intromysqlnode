const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql2')
require('dotenv').config()
const { dirname } = require('path/posix')
app.use(express.static('./public'))
 const connection = mysql.createConnection({
  host: process.env._HOST,
  user: process.env._USERNAME,
  password: process.env._PASSWORD,
  database: process.env._DATABASE,
  port: process.env._PORT
    
 })
 connection.connect(function(err)
 {
  if(err)
  {  console.log("shit hit the Fan      " + process.env._DATABASE)

    throw err;
  }else
  console.log("For once it did NOT hit the fan \n" +"Successfully connected to the database: "+ process.env._DATABASE)

 })
 //pedido em localhost:3000
app.get('/', function (req, res) {
  res.sendFile(path.join(dirname, '/public/index.html'))
})
app.get('/city', function (req, res) {
  res.send(`nome = ${req.params.nome}`)
})

const port = 3000;
app.listen(port,function(){
  console.log("Listening on port: " + port)
})