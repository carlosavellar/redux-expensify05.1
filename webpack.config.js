const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "./js/bandle.js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            contentBase: path.join(__dirname, "public"),
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    },
};