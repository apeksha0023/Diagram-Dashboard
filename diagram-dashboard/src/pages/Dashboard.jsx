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

    getComponents().then((data) => {
      setComponents(data);
    });

  }, []);

  return (
    <div className="dashboard">

      <UploadBox
        setImage={setImage}
        fileName={fileName}
        setFileName={setFileName}
      />

      <div className="layout">

        <DiagramViewer image={image} />

        <ComponentList
          components={components}
          selected={selected}
          setSelected={setSelected}
        />

      </div>

    </div>
  );
};

export default Dashboard;