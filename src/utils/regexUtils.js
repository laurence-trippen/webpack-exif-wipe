function isExifCompatibleFile(fileName) {
  return /\.(jpe?g)$/i.test(fileName);
}

module.exports.isExifCompatibleFile = isExifCompatibleFile;
