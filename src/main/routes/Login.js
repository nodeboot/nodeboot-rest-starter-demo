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
    var uiVariables = {};
    for(key in req.session){
      if(key.startsWith("ui_")){
        uiVariables[key] = escape(req.session[key])
      }
    }
    res.render('login.html', uiVariables);
  }

  @Post(path="/login-action")
  this.processLogin = async (req, res) => {

    var safeReceivedUsername = escape(req.body.username)
    var safeReceivedPassword = escape(req.body.password)

    if (typeof safeReceivedUsername === 'undefined' || typeof safeReceivedPassword === 'undefined') {
      console.log("username and password are required");
      req.session['ui_login_message'] = "User or password incorrect";
      return res.redirect("/login");
    }
    var user = await this.securityService.findUserByName(safeReceivedUsername);
    if(user[0].password === safeReceivedPassword){
      req.session['user_details'] = {};
      res.redirect("/home");
    }else{
      console.log("password incorrect for user: "+safeReceivedUsername);
      req.session['ui_login_message'] = "User or password incorrect";
      return res.redirect("/login");
    }

  }
}

module.exports = Login;
