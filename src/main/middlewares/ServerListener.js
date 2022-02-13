@ServerInitializer
function ServerListener() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.onBeforeLoad = () => {
    return new Promise(async (resolve, reject) => {
      console.log("Configuring database...");
      var existsUserTable = await this.dbSession.schema.hasTable('user');
      if (!existsUserTable) {
        await this.dbSession.schema.createTableIfNotExists('user', function(table) {
          table.increments('id').primary();
          table.string('username', 25).unique().notNullable();
          table.string('password', 25).notNullable();
          resolve();
        });
      }else{
        console.log("user table already exist");
        resolve();
      }
    });
  }

}

module.exports = ServerListener;
