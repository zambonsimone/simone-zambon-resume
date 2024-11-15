/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

const config = {
    extends: path.resolve(__dirname, './webpack.prod.js'),
    devServer: {}
};

module.exports = config;
