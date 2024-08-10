function isExifCompatibleFile(fileName) {
  return /\.(jpe?g|png|tiff)$/i.test(fileName);
}

module.exports.isExifCompatibleFile = isExifCompatibleFile;
