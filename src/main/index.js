require('nodejs-require-enhancer');
const path = require("path");
const RestApplicationStarter = require("nodeboot-rest-starter").RestApplicationStarter;
const restApplicationStarter = new RestApplicationStarter();
restApplicationStarter.run(path.join(__dirname, '/..'));
