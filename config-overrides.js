const {override, fixBabelImports,addWebpackAlias} = require('customize-cra');
const path = require("path")

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        views: path.resolve(__dirname, "./src/views"),
        components: path.resolve(__dirname, './src/components'),
        util: path.resolve(__dirname, './src/util'),
        api: path.resolve(__dirname, './src/api'),
        stores: path.resolve(__dirname, './src/stores')
    })
);