const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script.js', // откуда Webpack начинает читать код
    output: {
        path: path.resolve(__dirname, 'dist'), // куда складывать готовый проект
        filename: 'bundle.js',
        clean: true, // очищает папку dist перед каждой новой сборкой
    },
    devServer: {
        static: './dist',
        port: 3000,
        open: true, // автоматически открывать браузер при запуске
    },
    module: {
        rules: [
            {
                test: /\.css$/, // для работы со стилями
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/, // для обработки JS через Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // какой HTML брать за основу
        }),
    ],
};