@Route(name="Images")
function Route1(){

  @Autowire(name="dbSession")
  this.dbSession;

  @Get(path="/image/next")
  this.findAllCountries = (req, res) => {
    res.json({
      code:200,
      message:"success",
      content:{
        url:"https://drive.google.com/uc?id=1SSoRIEpMWrGZI4VaEgnTAQkpAEotiltv"
      },
    });
  }
}

module.exports = Route1;
