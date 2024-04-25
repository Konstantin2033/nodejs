const os = require("os");
const _ = require("lodash");
const userName = os.userInfo().username;

console.log(`Hello, ${userName}!`);