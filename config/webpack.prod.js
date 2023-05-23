const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
//const packageJson = require('../package.json')

const config = {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    devServer: {
        port: 3001,
        historyApiFallback: {
            index: 'public/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MicroFeContainer',
            remotes: {
                MicroFeChild: 'MicroFeChild@http://esmond-test-static-child-site.s3-website-us-west-2.amazonaws.com/microfechild.js'
            },
            //shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, config);
