var format = require('../src/format.js');

test('can format a file', function () {
    var formatted = format('5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW');

    expect(formatted.grid.width).toEqual(5);
    expect(formatted.initial.x).toEqual(1);
    expect(formatted.dirt[1]).toEqual({x: 2, y: 2, cleaned: false});
    expect(formatted.directions[1]).toEqual('N');
});