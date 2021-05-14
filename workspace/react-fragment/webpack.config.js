const path = require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // The following line can be replaced by a .babelrc.json config file
                        presets: [ "@babel/preset-env", "@babel/preset-react" ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
