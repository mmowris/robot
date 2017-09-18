var play = require('../src/play.js');

jest.mock('../src/play.js', () => jest.fn());


test('A promise is returned from running play.js',  function () {
    play('input.txt');
    expect(play.mock.calls.length).toBe(1);
});