# Nodeboot Rest Starter Demo

A demo collection of nodeboot rest starter, a framework inspired in spring boot framework (java)

# Usage

You just need to these files:

- src/main/index.js
- src/main/application.json
- src/main/routes/Route1.js

**Route1.js** is the main because it will contain your rest routes:

```
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
```

Just focus on publish your endpoints and the framework will configure  for you:

- express instance
- database connection

And brings `@annotations or @decorators` and dependency injection to nodejs.
