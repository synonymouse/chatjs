module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true
    },
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "no-underscore-dangle": [2, { "allowAfterThis": true }],
        "quotes": [2, "single", { "avoidEscape": true }],
        "import/prefer-default-export": false
    }
};
