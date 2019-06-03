const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    console.log("env:", env);
    const isProduction = env === "production";
    const CssExtracted = new ExtractTextPlugin("style.css");
    return {
        entry: "./src/app.js",
        output: {
            filename: "./js/bandle.js",
            path: path.join(__dirname, "public", "dist")
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
                    use: CssExtracted.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true
                                }

                            }

                        ]
                    })
                }
            ]
        },
        plugins: [
            CssExtracted,
            new HtmlWebpackPlugin({
                contentBase: path.join(__dirname, "public"),
                template: "./src/index.html",
                filename: "index.html"
            }),

        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    }
}
