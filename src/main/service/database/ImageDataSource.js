@Service

function ImageDataSource() {

  @Autowire(name = "dbSession")
  this.dbSession;

  this.findNextImageSqlString = `
  select * from image im
  where group_identifier = :group_identifier
  and im.id not in (
  	select ha.image_id from human_annotation ha, user us
  	where us.username  = :username
  	and ha.user_id = us.id
  )
  LIMIT 1
  `

  this.findNextImage = (group_identifier, username) => {
    return new Promise(async (resolve, reject) => {
      try {

        var params = {
          group_identifier: group_identifier,
          username: username
        };

        var nextImage = await this.dbSession
          .raw(this.findNextImageSqlString, params);

        if (nextImage.length == 0) {
          reject("Failed to find next image");
        }

        resolve(nextImage[0][0]);
      } catch (err) {
        console.log(err);
        reject("Failed to find next image");
      }
    });
  }

}

module.exports = ImageDataSource;
