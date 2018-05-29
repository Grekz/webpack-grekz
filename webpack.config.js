const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})
const jsJsxRule = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}
const htmlRule = {
    test: /\.html$/,
    use: [{
        loader:"html-loader", 
        options:{minimize:true}
    }]
}

module.exports = {
    module: {
        rules: [ jsJsxRule, htmlRule]
    },
    plugins: [htmlPlugin]
}