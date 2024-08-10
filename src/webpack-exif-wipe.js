// Node.js Core Modules
const fs = require('fs');
const path = require('path');

// NPM Packages
const exifRemove = require('exif-remove');
const { RawSource } = require('webpack-sources');


class WebpackExifWipePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('RemoveExifDataPlugin', (compilation, callback) => {
      const assets = Object.keys(compilation.assets);

      assets.forEach((asset) => {
        if (/\.(jpe?g|png|tiff)$/i.test(asset)) {
          const assetSource = compilation.assets[asset].source();
          const buffer = Buffer.from(assetSource, 'utf8');
          const newBuffer = exifRemove(buffer);

          compilation.assets[asset] = new RawSource(newBuffer);
        }
      });

      callback();
    });
  }
}

module.exports = WebpackExifWipePlugin;
