const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: {
        HomePage: './src/modules/HomePage/index.js',
        MagicPage: './src/modules/Magic/index.js',
    },
    output: {
        clean: true,
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/main.css"
        })
    ]
};
