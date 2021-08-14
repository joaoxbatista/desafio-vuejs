/**
* Plugin necessários para processamento dos arquivos do projeto
*/
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
    *  Configuração dos arquivos de entrada e saída
    */
    entry: join(__dirname, 'src', 'app.js'), 
    output: {
        path: join(__dirname, 'dist','build'), 
        filename: 'app.min.js'
    },

    /**
    *  Configuração dos loaders
    */
     module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, 
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                    loader: "sass-loader",
                    options: {
                        // Prefer `dart-sass`
                        implementation: require("dart-sass"),
                    },
                    },
                ],
            },
        ]
    },

    /**
    *  Configuração dos Plugins
    */
     plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, 'public', 'index.html')
        })
    ]

}