const path = require("path")
const fs = require("fs");
const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });
module.exports = {
  mode: 'production',
  entry: './bin/www',
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: "foo.js",
     chunkFilename: "[name].chunk.js",
     libraryTarget: "commonjs"
   },
  node: {
        fs: 'empty',
       child_process: 'empty',
       tls: 'empty',
       net: 'empty'
    },
 target: "node",
 externals: nodeModules,
};