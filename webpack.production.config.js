var path = require('path')
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports ={
    entry:{App:['webpack-dev-server/client?http://localhost:2005/','./src/index.js']},
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
    },
    devtool: 'inline-source-map',
    module:{
        loaders: [
            {
                exclude: /(node_modules|server.js)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }]

    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src/'),
        //  host:'0.0.0.0', This is used to host the server on a public ip
        historyApiFallback: true,
        //   hot:true
    }
}
