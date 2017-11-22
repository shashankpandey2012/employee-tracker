var path = require('path');

module.exports = {
    entry: {App: ['webpack-dev-server/client?http://localhost:3001/', './src/index.js']},

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/'
    },
    devtool: 'inline-source-map',
    module: {
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
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/'),
        //  host:'0.0.0.0', This is used to host the server on a public ip
        historyApiFallback: true,
        port: 3001

        //   hot:true
    }
};
