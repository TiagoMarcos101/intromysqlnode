require('dotenv').config()
const mysql = require('mysql2')
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
  {  
    console.log("shit hit the Fan AGGGGGAAAAAIIIIINNNN     " + process.env._DATABASE)
    throw err;

  }else
  console.log("For once shit did NOT hit the fan \n" +"And somehow i managed to connect to the database which is lemme see : "+ process.env._DATABASE)

 })
 module.exports = connection