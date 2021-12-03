 const express = require('express')
 const getRouter = express.Router()
 const connection = require('../dbconnect.js')


 //pedido em localhost:3000

  getRouter.get('/', function (req, response) {
    
    connection.query('SELECT Name,District,Population FROM city',(err,result)=>{
    if(err)
    {
      console.log("Deu porcaria")
    }else
    {
      response.json(result)
    }
  
  
    })
  })
  module.exports = getRouter