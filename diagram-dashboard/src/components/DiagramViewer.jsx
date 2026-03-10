import React, { useState } from "react";

const DiagramViewer = ({ image }) => {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    if (zoom > 0.4) {
      setZoom(zoom - 0.2);
    }
  };

  const reset = () => {
    setZoom(1);
  };

  return (
    <div className="viewer">

      <div className="controls">
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="image-container">
        {image ? (
          <img
            src={image}
            alt="diagram"
            style={{ transform: `scale(${zoom})` }}
          />
        ) : (
          <p>No image uploaded</p>
        )}
      </div>

    </div>
  );
};

export default DiagramViewer;