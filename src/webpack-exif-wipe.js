// NPM Packages
const chalk = require("chalk");
const exifremove = require('exifremove');
const { RawSource } = require("webpack-sources");

// My Modules
const { isExifCompatibleFile } = require("./utils/regexUtils");


class WebpackExifWipePlugin {

  apply(compiler) {
    const prefix = chalk.blue("[WebpackExifWipePlugin] ");

    console.log(prefix + "Loaded");

    compiler.hooks.emit.tapAsync('WebpackExifWipePlugin', (compilation, callback) => {
      const assetNames = Object.keys(compilation.assets);

      console.log(prefix + "assets:", assetNames);

      assetNames.forEach((assetName) => {
        if (isExifCompatibleFile(assetName)) {
          const assetSource = compilation.assets[assetName].source();

          console.log(prefix + "Asset Name:", assetName);
          console.log(prefix + "Asset Source: ", assetSource);

          const cleanedExifBuffer = exifremove.remove(assetSource);

          console.log(prefix + "cleaned:", cleanedExifBuffer);

          compilation.assets[assetName] = new RawSource(cleanedExifBuffer);
        }
      });

      callback();
    });
  }
}

module.exports = WebpackExifWipePlugin;
