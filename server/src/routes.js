module.exports = function(app){
  app.get("/", function(req, res){
    res.send("Hello world")
  })
  app.get("/about", function(req, res){
    res.send("About me");
  })
  app.get("/:userid/about/:location", function(req, res){
    res.send("about me " + req.params.userid + " " + req.params.location)
  })
}
