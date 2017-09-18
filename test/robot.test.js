var robot = require('../src/robot.js');

var r;
beforeEach(function () {
    r = new robot();
});

test('can set grid', function () {
    r.setGrid(1,1);
    expect(r.grid).toEqual({width: 1, height: 1});
});

test('can set position', function () {
    r.setPosition(1,1);
    expect(r.position).toEqual({x: 1, y: 1});
});

test('can get position', function () {
    r.setPosition(2,2);
    expect(r.getPosition()).toEqual({x: 2, y: 2});
});

test('can set dirt', function () {
    r.setDirt({x: 1, y: 1, cleaned: false});
    expect(r.dirt).toEqual([{x: 1, y: 1, cleaned: false}]);
});

test('can move robot inside grid', function () {
    r.setGrid(5,5);
    r.setPosition(0,0);
    r.moveRobot('N');
    expect(r.getPosition()).toEqual({x: 0, y: 1});

    r.moveRobot('S');
    expect(r.getPosition()).toEqual({x: 0, y: 0});

    r.moveRobot('E');
    expect(r.getPosition()).toEqual({x: 1, y: 0});

    r.moveRobot('W');
    expect(r.getPosition()).toEqual({x: 0, y: 0});
});

test('cannot move robot outside grid', function () {
    r.setGrid(5,5);
    r.setPosition(0,0);
    r.moveRobot('S');
    expect(r.getPosition()).toEqual({x: 0, y: 0});

    r.moveRobot('W');
    expect(r.getPosition()).toEqual({x: 0, y: 0});

    r.setPosition(5,5);
    r.moveRobot('N');
    expect(r.getPosition()).toEqual({x: 5, y: 5});

    r.setPosition(5,5);
    r.moveRobot('E');
    expect(r.getPosition()).toEqual({x: 5, y: 5});
});

test('can clean', function () {
    r.setGrid(5,5);
    r.setPosition(0,0);
    r.setDirt({x:0, y:1,cleaned: false});
    r.moveRobot('N');
    expect(r.dirt).toEqual([{x: 0, y: 1, cleaned: true}]);
});