/* eslint-disable @typescript-eslint/no-require-imports */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const md5 = require("js-md5");
const DotenvWebpack = require("dotenv-webpack");
const webpack = require("webpack");
const stylesHandler = MiniCssExtractPlugin.loader;

function getModuleName(resourcePath) {
    const fileWithExt = path.basename(resourcePath);
    return fileWithExt.replace(".module.scss","");
}

const config = {
    mode: "production",
    extends: path.resolve(__dirname, './webpack.config.js'),
    plugins: [
        new DotenvWebpack({
            path: "./.env.production",
            systemvars: true
        }),
        new MiniCssExtractPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:3030', 
              changeOrigin: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
           
            {
                oneOf: [
                    {
                        test: /\.module\.scss$/i,
                        use: [
                            stylesHandler, 
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        getLocalIdent: (context, localIdentName, localName) => {
                                            if (localName === "root") return localName;
                                            const camelCaseClass = localName.replace(/-./g, subs => subs[1].toUpperCase());
                                            const moduleName = getModuleName(context.resourcePath);
                                            const hash = md5.hex(context.resourcePath + localName).slice(0,6);
                                            return `${moduleName}_${camelCaseClass}__${hash}`;
                                        },
                                    }

                                }
                            },
                            'sass-loader',
                        ],
                    },
                    {
                        test: /\.scss$/i,
                        use: [stylesHandler, "css-loader", "sass-loader"]
                    },
                ]                
            },
        ],
    },
    devtool: false,
};

module.exports = config;
