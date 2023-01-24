const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        content: path.join(__dirname, "src/content.ts"),
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
    },


};