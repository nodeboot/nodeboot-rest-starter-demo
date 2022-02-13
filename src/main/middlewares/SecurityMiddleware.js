@Middleware(order="1")
function SecurityMiddleware(){

  this.dispatch = (req, res, next) => {

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
