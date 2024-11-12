/* eslint-disable @typescript-eslint/no-require-imports */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const md5 = require("js-md5");
const DotenvWebpack = require("dotenv-webpack");

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

function getModuleName(resourcePath) {
    const fileWithExt = path.basename(resourcePath);
    return fileWithExt.replace(".module.scss","");
}

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
        publicPath: "/"
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: true,
        proxy: {
            '/api': {
              target: 'http://localhost:3030', 
              changeOrigin: true,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new DotenvWebpack({
            path: isProduction ? "./.env.production" : "./.env.development",
            systemvars: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
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
                                            const camelCaseClass = localName.replace(/-./g, subs => subs[1].toUpperCase());
                                            const moduleName = getModuleName(context.resourcePath);
                                            const hash = md5.hex(context.resourcePath + localName).slice(0,6);
                                            return `${moduleName}_${camelCaseClass}__${hash}`
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
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...', ".scss"],
    },
    devtool: "source-map"
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
    }

    return config;
};
