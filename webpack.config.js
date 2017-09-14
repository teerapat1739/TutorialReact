module.exports = {
    entry: "./entry.js",
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
                loader:'babel-loader',
            }
        ]
    }
};
