const fs = require("fs")
const path = require("path")

@Route(name="Login")
function Route1(){

  @Autowire(name="dbSession")
  this.dbSession;

  @Autowire(name="rootPath")
  this.rootPath;

  this.cacheLoginHtml;

  @Get(path="/login1")
  this.showLogin = (req, res) => {
    res.type('text/html');

    if(this.cacheLoginHtml){
      return res.send(this.cacheLoginHtml);
    }

    fs.readFile(path.join(this.rootPath,"src/main/pages/login.html"), 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return res.send("Internal Error");
      }
      return res.send(data);
    })
  }

  @Get(path="/login")
  this.showLogin = (req, res) => {
    res.render('Login', { layout: 'Login' });
  }

  @Post(path="/login-action")
  this.processLogin = (req, res) => {
    console.log(req.body);
    if (typeof req.body.username === 'undefined' || typeof req.body.password === 'undefined') {
      console.log("User or password incorrect: "+req.body.username);
      req.session['login_message'] = "User or password incorrect";
      return res.redirect("/login");
    }

    req.session['user_details'] = {};
    res.redirect("/home");
  }
}

module.exports = Route1;
