@Route(name="Route1", path="/route1")
function Route1(){

  @Autowire(name="express")
  this.express;

  @Autowire(name="databaseCriteria")
  this.databaseCriteria;

  this.companies = {"acme", "oscorp", "stark-industries", "shield", "sword"};

  @Get(path="/companies")
  this.findAllCompanies = (req, res) => {
    res.json(this.companies);
  }

  @Get(path="/countries")
  this.findAllCountries = (req, res) => {
    this.databaseCriteria('Country').then(function(data) {
      res.json(data);
    }).catch((err) => { console.log( err); throw err })
  }
}

module.exports = Route1;
