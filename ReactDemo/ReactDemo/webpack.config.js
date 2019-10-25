const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: './clientapp/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader",
                        options: {
                            strictMath: true,
                            noIeCompat: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [{ loader: "file-loader" }]
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff" }]
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: "url-loader?limit=10000&mimetype=application/octet-stream" }]
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: "file-loader" }]
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: "url-loader?limit=10000&mimetype=image/svg+xml" }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/js/webpack/'),
        library: '[name]',
        libraryTarget: 'var'
    },
    optimization: {
        minimize: false,
        moduleIds: 'named',
        runtimeChunk: 'single',
        occurrenceOrder: true,
        flagIncludedChunks: true,
        removeAvailableModules: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                babylonjs: {
                    test: /[\\/]node_modules[\\/]babylonjs[\\/]/,
                    name: 'babylonjs',
                },
                bootstrap: {
                    test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
                    name: 'bootstrap',
                },
                react_any: {
                    test: /[\\/]node_modules[\\/]@?react[^\\/]*([\\/][^\\/]+)?[\\/]/,
                    name: 'react-any',
                },
                modules: {
                    test: /[\\/]node_modules[\\/](?!(babylonjs|bootstrap|@?react))[^\\/]*([\\/][^\\/]+)?[\\/]/,
                    name: 'modules',
                },
            },
        },
    },
    externals: {}
};