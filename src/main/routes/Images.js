@Route(name="ImagesRoute")
function ImagesRoute(){

  @Autowire(name="imageDataSource")
  this.imageDataSource;

  //DEPRECATED
  @Get(path="/api/image/next/2")
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

  @Post(path="/api/image/next")
  @Protected(permission="image:get-next")
  this.getNextImage = async (req, res) => {

    var safeReceivedUuid = req.body.uuid;
    //TODO: retrieve username from access_token
    var safeReceivedUsername = "admin";
    var nextImage = await this.imageDataSource.findNextImage(safeReceivedUuid, safeReceivedUsername);
    if(!nextImage){
      return res.json({
        code:500,
        message:"Images cannot be retrieved"
      });
    }

    res.json({
      code:200,
      message:"success",
      content:{
        id:nextImage.id,
        url:nextImage.url
      },
    });
  }
}

module.exports = ImagesRoute;
