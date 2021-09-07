const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/main.js"
    },
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/dist")
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.scss$/, use: ["stryle-loader", "css-loader", "scss-loader"] },
            { 
                test: /\.(png|gif|jpg)$/, 
                use: { 
                    loader: "url-loader", 
                    options: { 
                        name: "[name].[ext]?[hash]",
                        limit: 5000
                    } 
                } 
            },
            { test: /\.js$/, use: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main.html"
        }),
        new CleanWebpackPlugin()
    ]
}