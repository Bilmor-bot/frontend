import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    mode: process.env.NODE_ENV || 'production',
    entry: {
        404: './src/modules/404/index.js',
        App: './styles/index.scss',
        HomePage: './src/modules/HomePage/index.js',
        SkillsPage: './src/modules/Skills/index.js',
        ProfilePage: './src/modules/Profile/index.js',
        AdminBundle: './src/modules/Admin/index.js'
    },
    output: {
        clean: true,
        filename: '[name]/index.js',
        path: path.resolve('build'),
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
    resolve: {
        alias: {
            styles: path.resolve('styles/'),
            src: path.resolve('src/'),
            components: path.resolve('src/components/'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/main.css"
        })
    ]
};
