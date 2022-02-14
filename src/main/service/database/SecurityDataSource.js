@Service
function SecurityDataSource() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.findUserByName = (name) => {
    return new Promise(async (resolve, reject) => {
      try {
        var user = await this.dbSession
          .select('*')
          .from('user')
          .where('username', name);
        resolve(user);
      }catch(err){
        console.log(err);
        reject("Failed to find user by name");
      }
    });
  }

}

module.exports = SecurityDataSource;
