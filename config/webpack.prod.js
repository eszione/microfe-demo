const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
//const packageJson = require('../package.json')

const config = {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MicroFeContainer',
            remotes: {
                MicroFeChild: 'MicroFeChild@https://esmond-test-microfe.s3.us-west-2.amazonaws.com/child/remoteEntry.js'
            },
            //shared: packageJson.dependencies
        }),
        new ExternalTemplateRemotesPlugin()
    ]
};

module.exports = merge(commonConfig, config);
