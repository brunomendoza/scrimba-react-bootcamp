const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}