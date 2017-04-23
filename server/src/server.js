var express = require("express");
var practiceLibrary = require("./practiceLibrary.js")
var routes = require("./routes.js")
var sayName = require("./testFunction.js")

var app = express()
//I'm calling an function thats returning an object
//that has a list of functions in it
//If I just had app = express then app would be a function and not an object.
//But because I have express() which is not a function calling an object
//app becomes an object.
var app3 = sayName()

routes(app)

app.listen(3000, function(){
  console.log('server is running on port 3000')
})
