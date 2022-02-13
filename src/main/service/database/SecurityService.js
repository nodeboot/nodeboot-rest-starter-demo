@Service()

function SecurityService() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.findUserByName = (name) => {
    return new Promise(async (resolve, reject) => {
      try {
        var person = await this.dbSession
          .select('*')
          .from('user')
          .where('username', name);
        resolve(person);
      }catch(err){
        console.log(err);
        reject("Failed to find user by name");
      }
    });
  }

}

module.exports = SecurityService;
