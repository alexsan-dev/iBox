const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require("@zeit/next-sass");
const withOffline = require('next-offline');

module.exports = withOffline(withLess(withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config
    },
    distDir: './functions/next',
    xPoweredBy: false
}))));
