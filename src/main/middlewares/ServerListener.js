@ServerInitializer()
function ServerListener(){

  this.onBeforeLoad = () => {
    return new Promise(function(resolve, reject) {
      console.log("Hello im before express");
      resolve();
    });
  }

  this.onAfterLoad = () => {
    return new Promise(function(resolve, reject) {
      console.log("Hello im after express");
      resolve();
    });
  }
}

module.exports = ServerListener;
