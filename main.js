//1.exports.world
var hello = require('./hello');
hello.world();

//2.module.exports
var Good = require('./moduleExports');
good = new Good();
good.setName('leogle');
good.sayGood();