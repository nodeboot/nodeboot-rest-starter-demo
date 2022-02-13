const fs = require("fs")
const path = require("path")
const escape = require('escape-html');

@Route(name="Login")
function Login(){

  @Autowire(name="securityService")
  this.securityService;

  @Autowire(name="rootPath")
  this.rootPath;

  @Get(path="/login")
  this.showLogin = (req, res) => {
    res.render('login.html');
  }

  @Post(path="/login-action")
  this.processLogin = async (req, res) => {

    var safeReceivedUsername = escape(req.body.username)
    var safeReceivedPassword = escape(req.body.password)

    if (typeof safeReceivedUsername === 'undefined' || typeof safeReceivedPassword === 'undefined') {
      console.log("username and password are required");
      req.session['login_message'] = "User or password incorrect";
      res.locals.login_message = "User or password incorrect";
      return res.render('login.html',{login_message:"User or password incorrect"});
    }
    var user = await this.securityService.findUserByName(safeReceivedUsername);
    if(user[0].password === safeReceivedPassword){
      req.session['user_details'] = {};
      res.redirect("/home");
    }else{
      console.log("password incorrect for user: "+safeReceivedUsername);
      req.session['login_message'] = "User or password incorrect";
      res.locals.login_message = "User or password incorrect";
      return res.render('login.html',{login_message:"User or password incorrect"});
      return res.redirect("/login");
    }

  }
}

module.exports = Login;
