var path = require('path');
var webpack = require("webpack");
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
var filelocation = "./public/dist/bundle.js"

if (minimize) {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    })
  )  
  plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
        compress: {
            warnings: false
        }
    }
  ));
  filelocation = "./public/dist/bundle.min.js"
}
module.exports = {
    entry: './public/js/app.jsx',
    output: {
        path: __dirname,
        filename: filelocation
    },
    module: {
        loaders: [{
            // test: /\.jsx?$/,
            loaders: ['babel?presets[]=es2015,presets[]=react'],
            include: [
                path.resolve(__dirname, "./public/js"),
            ],
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ]
        }],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    plugins: plugins
};