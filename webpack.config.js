const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app:'./app',
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            },
            { test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
      ]
};
