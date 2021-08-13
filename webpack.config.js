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
    entry: join(__dirname, 'app.js'), 
    output: {
        path: join(__dirname, 'build'), 
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
            }
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
            template: join(__dirname, 'index.html')
        })
    ]

}