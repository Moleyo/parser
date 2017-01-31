var express = require('express')
var parser = require('ua-parser-js');
var app = express()
app.enable('trust proxy')
app.get('/', function (req, res) {
  res.send({"ipaddress": req.ip, "language":req.acceptsLanguages()[0],"software":req.headers['user-agent'].split(') ')[0].split(' (')[1]});
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})