module.exports = {
    entry: './src/index.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    // devServer: {
    //   contentBase: './public',
    //   inline: true,
    //   port: 8080,
    //   historyApiFallback: true,
    //   stats: {
    //     version: false,
    //     hash: false,
    //     chunkModules: false,
    // },
}
