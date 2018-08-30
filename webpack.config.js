const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                resourceQuery: [
                    // (a) => {
                    //     console.log(a);
                    //     // console.trace('Show me');
                    //     return false;
                    // },
                    /url/
                ],
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                resourceQuery: /react/,
                use: [
                    {
                        loader: 'react-svg-loader',
                        // options: {
                        //     jsx: true // true outputs JSX tags
                        // }
                    }
                ]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};