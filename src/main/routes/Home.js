const fs = require("fs")
const path = require("path")

@Route(name="Home")
function Route1(){

  @Autowire(name="dbSession")
  this.dbSession;

  @Autowire(name="rootPath")
  this.rootPath;

  @Get(path="/home")
  this.showHome = (req, res) => {
    res.render('index.html');
  }
}

module.exports = Route1;
