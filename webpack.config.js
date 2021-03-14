const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/frontend/App.js",
    output: {
        path: path.resolve(__dirname, 'build/frontend'),
        filename: 'bundle.js',
    },
    devServer:
    {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000/',
                secure: false,
                changeOrigin: true
              },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({ template: "./src/frontend/index.html" })]
};