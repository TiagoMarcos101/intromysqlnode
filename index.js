const express = require('express')
const app = express()
const path = require('path')

app.use('/city',require('./routes/getCitiesRoute.js'))

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname, './public/index.html'))
})
const port = 3000;
app.listen(port,function(){
  console.log("Listening on port: " + port)
})