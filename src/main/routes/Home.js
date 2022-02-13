const fs = require("fs")
const path = require("path")

@Route(name="Home")
function Route1(){

  @Autowire(name="dbSession")
  this.dbSession;

  @Autowire(name="rootPath")
  this.rootPath;

  this.cacheIndexHtml;

  @Get(path="/home")
  this.showHome = (req, res) => {
    res.type('text/html');

    if(this.cacheIndexHtml){
      return res.send(this.cacheIndexHtml);
    }

    fs.readFile(path.join(this.rootPath,"src/main/pages/index.html"), 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return res.send("Internal Error");
      }
      return res.send(data);
    })
  }
}

module.exports = Route1;
