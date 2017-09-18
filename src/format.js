var _ = require('lodash');

/*
* Takes a file and returns directions formatted for a robot
* @param unformatted - file.txt
* @auther Matt Mowris
*/
module.exports = function (unformatted) {
	
    // split the file at new lines
    var filtered = unformatted.split('\n');
	
    // json obj containing all info
    var formatted = {
        grid: {
            width: Number(_.first(filtered).split(' ')[0]),
            height: Number(_.first(filtered).split(' ')[1])
        },
        initial: {
            x: Number(filtered[1].split(' ')[0]),
            y: Number(filtered[1].split(' ')[1])
        },
        dirt:  _.map(filtered, function (patch, index) {
            if(index > 1 && index < filtered.length- 1) {
                return {
                    x: Number(patch.split(' ')[0]),
                    y: Number(patch.split(' ')[1]),
                    cleaned: false
                };
            }
        }),
        directions: _.last(filtered).split('')
    };
    // clean json removing undefined values in patches of dirt inserted from _.map()
    // TODO: move into _.map for cleanliness
    formatted.dirt = _.filter(formatted.dirt, function(patch, index) {
        return (index > 1 && index < filtered.length - 1);
    });

    return formatted;
};