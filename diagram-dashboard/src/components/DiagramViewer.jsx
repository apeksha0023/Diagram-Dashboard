import React, { useState } from "react";

const DiagramViewer = ({ image, selected }) => {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(zoom + 0.2);
  const zoomOut = () => zoom > 0.4 && setZoom(zoom - 0.2);
  const reset = () => setZoom(1);

  return (
    <div className="viewer">

      <div className="controls">
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="image-container">

        {image ? (
          <div className="diagram-wrapper" style={{ transform: `scale(${zoom})` }}>

            <img src={image} alt="diagram" />

            {/* Glowing marker */}
            {selected && (
              <div
                className="marker"
                style={{
                  left: `${selected.x}%`,
                  top: `${selected.y}%`
                }}
              >
                <span className="marker-label">{selected.name}</span>
              </div>
            )}

          </div>
        ) : (
          <p>No diagram uploaded</p>
        )}

      </div>
    </div>
  );
};

export default DiagramViewer;