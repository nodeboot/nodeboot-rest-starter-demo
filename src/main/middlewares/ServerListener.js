@ServerInitializer()

function ServerListener() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.onBeforeLoad = () => {
    return new Promise(async (resolve, reject) => {
      console.log("Configuring database...");
      await this.dbSession.schema.createTableIfNotExists('persons', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        resolve();
      });

    });
  }

}

module.exports = ServerListener;
