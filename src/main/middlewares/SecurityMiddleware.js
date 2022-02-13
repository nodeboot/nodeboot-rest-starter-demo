@Middleware(order="1")
function SecurityMiddleware(){

  this.dispatch = (req, res, next) => {
    console.log("Hello from SecurityMiddleware");

    if(req.url.startsWith("/login")){
      return next();
    }

    if(req.session['user_details']){
      next();
    }else{
      res.redirect("/login");
    }
  }
}

module.exports = SecurityMiddleware;
