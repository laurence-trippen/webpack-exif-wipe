// Styles
import '../css/style.css';

import ExifReader from 'exifreader';


async function loadExifData() {
  const cleanedImg = document.getElementById('cleaned-img');
  if (!cleanedImg) return;

  const exifDataElement = document.getElementById('exif-data');
  if (!exifDataElement) return;

  // Create an OffscreenCanvas
  const offscreenCanvas = new OffscreenCanvas(cleanedImg.width, cleanedImg.height);

  // Get the 2D rendering context
  const context = offscreenCanvas.getContext('2d');

  // Draw the image onto the OffscreenCanvas
  context.drawImage(cleanedImg, 0, 0);

  // Convert the OffscreenCanvas to a Blob
  const blob = await offscreenCanvas.convertToBlob({ type: 'image/jpeg' });

  // Convert the Blob to an ArrayBuffer
  const arrayBuffer = await blob.arrayBuffer();

  // Load EXIF data from the ArrayBuffer
  const exifData = await ExifReader.load(arrayBuffer);

  console.log(exifData);

  const exifTextOutput = JSON.stringify(exifData, null, 2);
  console.log(exifTextOutput);

  // TODO: Add clipboard button
  // navigator.clipboard.writeText(exifTextOutput);

  exifDataElement.innerHTML = exifTextOutput;
}

loadExifData();
