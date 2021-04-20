const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    externals: ['react', 'react-dom']
};