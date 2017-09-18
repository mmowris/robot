var bluebird = require('bluebird'),
    format = require('./format.js'),
    robot = require('./robot.js'),
    _ = require('lodash');
var fs = bluebird.promisifyAll(require('fs'));

module.exports = function (file) {
    return fs.readFileAsync(file, 'ascii')
        .then(function (unformattedFile) {
            return format(unformattedFile);
        })
        .then(function (obj) {
            
            // instiantiate new mattbot
            var mattbot = new robot();

            // set grid for robot
            mattbot.setGrid(obj.grid.width, obj.grid.height);

            // set initial position for robot
            mattbot.setPosition(obj.initial.x, obj.initial.y);

            // add dirt to game
            _.each(obj.dirt, function (dirt) {
                mattbot.setDirt(dirt);
            });

            // go through the directions
            _.each(obj.directions, function (direction) {
                mattbot.moveRobot(direction);
            });

            var cleaned = _.filter(mattbot.dirt, function (dirt) {
                return dirt.cleaned === true;
            });

            var finalPosition = mattbot.getPosition();

            return finalPosition.x + ' ' + finalPosition.y + '\n' + cleaned.length;
        });
};