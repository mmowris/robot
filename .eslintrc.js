module.exports = {
   "env": {
        "commonjs": true,
        "node": true,
        "es6": true,
        "jest":true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "off"
        ]
    }
};