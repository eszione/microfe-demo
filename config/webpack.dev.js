const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const packageJson = require('../package.json')

const config = {
    mode: process.env.NODE_ENV,
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
                MicroFeChild: 'MicroFeChild@http://localhost:3000/remoteEntry.js'
            },
            shared: Object.keys(packageJson.dependencies)
        }),
        new ExternalTemplateRemotesPlugin()
    ]
};

module.exports = merge(commonConfig, config);
