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
  entry: './app.js',
  output: {
     path: __dirname,
     filename: "server.js",
     chunkFilename: "[name].chunk.js",
     libraryTarget: "commonjs"
   },
  node: {
        fs: 'empty',
       child_process: 'empty',
       tls: 'empty',
       net: 'empty',
       __dirname: true
    },
 target: "async-node",
 externals: nodeModules,
};