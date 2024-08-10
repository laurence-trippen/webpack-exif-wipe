const { test, describe } = require("node:test");
const assert = require("node:assert");
const { isExifCompatibleFile } = require("../src/utils/regexUtils");


describe("RegexUtils", () => {

  test(".jpg is exif compatible", (t) => {
    const result = isExifCompatibleFile("name.jpg");

    assert.strictEqual(result, true);
  });

  test(".jpeg is exif compatible", (t) => {
    const result = isExifCompatibleFile("name.jpeg");

    assert.strictEqual(result, true);
  });

  test(".png is NOT exif compatible", (t) => {
    const result = isExifCompatibleFile("name.png");

    assert.strictEqual(result, false);
  });

  test(".tiff is exif compatible", (t) => {
    const result = isExifCompatibleFile("name.tiff");

    assert.strictEqual(result, true);
  });

  test(".gif is NOT exif compatible", (t) => {
    const result = isExifCompatibleFile("name.gif");

    assert.strictEqual(result, false);
  });

  test(".txt is NOT exif compatible", (t) => {
    const result = isExifCompatibleFile("name.txt");

    assert.strictEqual(result, false);
  });

});
