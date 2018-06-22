const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/Loader.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'DFFLoader.js'
    },
    target: 'web'
};
