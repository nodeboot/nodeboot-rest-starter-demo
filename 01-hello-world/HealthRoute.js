@Route
function HealthRoute() {

  @Get(path = "/health")
  this.getHealth = async (req, res) => {
    return res.json({
      code: 200,
      message: "success"
    })
  }

}

module.exports = HealthRoute;
