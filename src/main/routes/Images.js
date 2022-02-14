@Route(name="ImagesRoute")
function ImagesRoute(){

  @Autowire(name="dbSession")
  this.dbSession;

  @Get(path="/api/image/next")
  @Protected(permission="image:get-next")
  this.getNextImage = (req, res) => {
    res.json({
      code:200,
      message:"success",
      content:{
        url:"https://drive.google.com/uc?id=1SSoRIEpMWrGZI4VaEgnTAQkpAEotiltv"
      },
    });
  }
}

module.exports = ImagesRoute;
