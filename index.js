var play = require('./src/play.js');

play('input.txt').done(function (obj) {
    console.log(obj);
});