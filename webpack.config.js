const path = require('path');
const webpack = require('webpack');

module.exports={
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        port: 2500,
      },
    mode: "development",  
    entry:path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
             test: /\.m?js$/,
             exclude: path.join(__dirname,"node_modules"),
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env','@babel/preset-react']
                 }
             }
            },
    
            {test: /\.css$/, use: ['style-loader','css-loader']}
        ]
    },
    plugins: [
        new webpack.ProgressPlugin()
    ]
    
}