// Desired width
const desiredWidth = 600;
// Get the actual device width
const deviceWidth = window.screen.width;
// Calculate the initial scale
const initialScale = Math.min(deviceWidth / desiredWidth, 1.0);
// Update the viewport meta tag
const viewportMeta = document.querySelector("meta[name=viewport]");
viewportMeta.setAttribute('content', `width=${desiredWidth}, initial-scale=${initialScale}`);