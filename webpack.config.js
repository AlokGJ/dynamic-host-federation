const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        libraryTarget: 'umd',
        library: 'FEDERATE'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};