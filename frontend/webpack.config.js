const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      js:'./src/index.js',
      css:'./src/main.css',
    },
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
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
            },
        ]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
    postcss: [
      require('postcss-easy-import')({ glob: true }),
    ],
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
