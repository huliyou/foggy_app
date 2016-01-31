var webpack = require('webpack');



module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js',
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$|\.js?$/,
                exclude: /node_modules/,
                //loader: 'react-hot!babel'
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                //loader: 'style!css!autoprefixer?browsers=last 2 versions'
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=100000000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: './',
        filename: './bin/bundle.js',
    },
    devServer: {
        contentBase: './',
        hot: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.ProvidePlugin({
        //    'Promise': 'es6-promise',
        //    'fetch': 'imports?this=>global!exports?global.fetch!isomorphic-fetch'
        //})
    ]
};
