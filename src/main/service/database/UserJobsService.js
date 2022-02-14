@Service
function UserJobsService() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.findUserJob = (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        var userJob = await this.dbSession
          .select('*')
          .from('user_jobs')
          .where('user_id', userId);
        resolve(userJob);
      }catch(err){
        console.log(err);
        reject("Failed to find user by name");
      }
    });
  }

}

module.exports = UserJobsService;