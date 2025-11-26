/**
 * Scanline flood fill algorithm with color tolerance
 * Optimized for coloring book images with anti-aliased edges
 */

// Check if two colors match within a tolerance
function colorsMatch(r1, g1, b1, r2, g2, b2, tolerance) {
  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance
  );
}

// Check if a color is "black-ish" (boundary line)
function isBlackish(r, g, b, tolerance = 60) {
  return r < tolerance && g < tolerance && b < tolerance;
}

// Check if a color is "white-ish" (unfilled area)
function isWhitish(r, g, b, tolerance = 30) {
  return r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance;
}

/**
 * Perform flood fill on canvas image data
 * @param {ImageData} imageData - Canvas image data
 * @param {number} startX - Starting X coordinate
 * @param {number} startY - Starting Y coordinate
 * @param {object} fillColor - {r, g, b} color to fill with
 * @param {number} tolerance - Color matching tolerance (default 25)
 * @returns {ImageData} Modified image data
 */
export function floodFill(imageData, startX, startY, fillColor, tolerance = 25) {
  const { data, width, height } = imageData;
  
  // Get the color at the starting position
  const startIdx = (startY * width + startX) * 4;
  const startR = data[startIdx];
  const startG = data[startIdx + 1];
  const startB = data[startIdx + 2];
  
  // Don't fill if clicking on a black boundary line
  if (isBlackish(startR, startG, startB)) {
    return imageData;
  }
  
  // Don't fill if already the target color
  if (
    colorsMatch(startR, startG, startB, fillColor.r, fillColor.g, fillColor.b, 5)
  ) {
    return imageData;
  }
  
  // Create a visited array to track pixels we've processed
  const visited = new Uint8Array(width * height);
  
  // Stack for flood fill (using array as stack for better performance)
  const stack = [[startX, startY]];
  
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    
    // Skip if out of bounds
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    
    const pixelIdx = y * width + x;
    
    // Skip if already visited
    if (visited[pixelIdx]) continue;
    
    const idx = pixelIdx * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Skip if this is a boundary (black line)
    if (isBlackish(r, g, b)) continue;
    
    // Check if this pixel matches the starting color
    if (!colorsMatch(r, g, b, startR, startG, startB, tolerance)) continue;
    
    // Mark as visited
    visited[pixelIdx] = 1;
    
    // Fill this pixel
    data[idx] = fillColor.r;
    data[idx + 1] = fillColor.g;
    data[idx + 2] = fillColor.b;
    data[idx + 3] = 255; // Full opacity
    
    // Add neighboring pixels to stack (4-directional)
    stack.push([x + 1, y]);
    stack.push([x - 1, y]);
    stack.push([x, y + 1]);
    stack.push([x, y - 1]);
  }
  
  return imageData;
}

/**
 * Get the color at a specific pixel
 * @param {ImageData} imageData 
 * @param {number} x 
 * @param {number} y 
 * @returns {object} {r, g, b, a}
 */
export function getPixelColor(imageData, x, y) {
  const { data, width } = imageData;
  const idx = (y * width + x) * 4;
  return {
    r: data[idx],
    g: data[idx + 1],
    b: data[idx + 2],
    a: data[idx + 3]
  };
}

/**
 * Determine if a pixel should be unfilled (is a colored region, not black or white)
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {boolean}
 */
export function isFilledColor(r, g, b) {
  // Not black (boundary) and not white (unfilled)
  return !isBlackish(r, g, b, 60) && !isWhitish(r, g, b, 30);
}

// White color for unfilling
export const WHITE = { r: 255, g: 255, b: 255 };

