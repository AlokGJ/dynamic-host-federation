const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};