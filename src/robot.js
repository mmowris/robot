var _ = require('lodash');

module.exports = function () {
	
    /*
    * Creates robot game
    * @author Matt Mowris
    */
    var game = {
        grid: undefined,
        position: undefined,
        dirt: [],

        /*
        * Create game board
        */
        setGrid: function (width, height) {
            this.grid = {
                width: width,
                height: height
            };
        },

        /*
        * Updates robots position and cleans dirt at new position
        * @param x: x coord
        * @param y: y coord
        * @author Matt
        */
        setPosition: function (x,y) {			
            this.position = {
                x: x,
                y: y
            };

            this.cleanDirt();
        },

        getPosition: function () {
            return this.position;
        },

        setDirt: function (dirt) {
            this.dirt.push(dirt);
        },

        cleanDirt: function () {
            this.dirt = _.map(this.dirt, function (dirt) {
                if (dirt.x === this.position.x && dirt.y === this.position.y && dirt.cleaned === false) {
                    dirt.cleaned = true;
                }
                return dirt;
            }.bind(this));
        },

        moveRobot: function (direction) {
            if (direction === 'N' && this.position.y < this.grid.height - 1) {
                this.setPosition(this.position.x, this.position.y + 1);
            } else if (direction === 'E' && this.position.x < this.grid.width - 1) {
                this.setPosition(this.position.x + 1, this.position.y);
            } else if (direction === 'S' && this.position.y > 0) {
                this.setPosition(this.position.x, this.position.y - 1);
            } else if (direction === 'W' && this.position.x > 0) {
                this.setPosition(this.position.x - 1, this.position.y);
            }
        }
    };

    return game;
};