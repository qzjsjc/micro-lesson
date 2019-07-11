const path = require('path');
const webpack = require('webpack');
const _externals = require('externals-dependencies')

module.exports = {
    entry: {
        app: [
            // 如果polyfill放在这里，打包的时候将不会被external,必须在js里require才能有效external
            // 'babel-polyfill',
            './app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [".js"]
    },
    target: 'node',
    externals: _externals(),
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]
}