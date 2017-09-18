# Robot Program

## Launch local environment
1.) Install [NodeJS](http://nodejs.org/download/). Then in terminal:

    $ git clone <THIS REPO>

2.) Install node dependencies

	$ npm install

3.) Ensure a input.txt file is in root directory and run the following command

	$ npm start

4.) If you'd like to view jest and linting tests?

	$ npm test

## Description

This program takes a input file formatted as follows:
```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

The results are read in using filesystem, parsed into readable instructions, and then executed in terminal. The output is given in the form of final position and number of dirt patches cleaned. For the above directions, output would be
```
1 3
1
```
