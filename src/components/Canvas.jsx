import { useRef, useEffect, useState, useCallback } from 'react';
import { floodFill, getPixelColor, isFilledColor, WHITE } from '../utils/floodFill';

function Canvas({ selectedColor, imageSrc }) {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [originalImage, setOriginalImage] = useState(null);

  // Load the image when component mounts or imageSrc changes
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      setImageLoaded(true);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  // Draw the image onto the canvas when loaded
  useEffect(() => {
    if (!imageLoaded || !originalImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Set canvas size to match image
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;

    // Draw the image
    ctx.drawImage(originalImage, 0, 0);
  }, [imageLoaded, originalImage]);

  // Handle canvas click for flood fill
  const handleClick = useCallback((e) => {
    if (!canvasRef.current || !selectedColor) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();

    // Calculate click position relative to canvas, accounting for scaling
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Get current image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Get the color at click position
    const clickedColor = getPixelColor(imageData, x, y);

    // Determine fill color: if clicking on a filled color, unfill (white), otherwise fill with selected color
    let fillColor;
    if (isFilledColor(clickedColor.r, clickedColor.g, clickedColor.b)) {
      fillColor = WHITE;
    } else {
      fillColor = selectedColor;
    }

    // Perform flood fill
    const newImageData = floodFill(imageData, x, y, fillColor);

    // Put the modified image data back
    ctx.putImageData(newImageData, 0, 0);
  }, [selectedColor]);

  return (
    <div className="canvas-container">
      {!imageLoaded && <div className="loading">Loading...</div>}
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        style={{ 
          cursor: selectedColor ? 'crosshair' : 'default',
          display: imageLoaded ? 'block' : 'none'
        }}
      />
    </div>
  );
}

export default Canvas;

