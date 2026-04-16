const path = require('path'); // NodeJS модуль для разрешения путей файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // куда сохранять бандлы - это должен быть АБСОЛЮТНЫЙ путь
        filename: 'app.bundle.js' // и как их называть
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, // в обратном порядке - сначала обрабатывает css-loader, потом плагин
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        new MiniCSSExtractPlugin()
    ]
}
