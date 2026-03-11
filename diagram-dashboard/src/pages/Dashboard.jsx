import React, { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

const Dashboard = () => {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchComponents = async () => {
      const data = await getComponents();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  const selectedComponent = components.find(
    (item) => item.id === selected
  );

  return (
    <div className="app-container">

      <div className="dashboard">

        {/* Header */}
        <header className="dashboard-header">
          <h1>⚡ Diagram Dashboard</h1>
          <p>
            Upload and inspect circuit diagrams with detected components
          </p>
        </header>

        {/* Upload Section */}
        <section className="card">
          <UploadBox
            setImage={setImage}
            fileName={fileName}
            setFileName={setFileName}
          />
        </section>

        {/* Selected Component */}
        {selectedComponent && (
          <div className="selected-info">
            Selected Component: <strong>{selectedComponent.name}</strong>
          </div>
        )}

        {/* Main Layout */}
        <div className="layout">

          {/* Diagram Viewer */}
          <section className="viewer card">
            <DiagramViewer
              image={image}
              selected={selectedComponent}
            />
          </section>

          {/* Component List */}
          <section className="sidebar card">
            <ComponentList
              components={components}
              selected={selected}
              setSelected={setSelected}
            />
          </section>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;