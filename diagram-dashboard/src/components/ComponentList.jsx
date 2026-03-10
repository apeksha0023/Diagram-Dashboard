import React from "react";

const ComponentList = ({ components, selected, setSelected }) => {

  return (
    <div className="sidebar">

      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          className={selected === item.id ? "component active" : "component"}
          onClick={() => setSelected(item.id)}
        >
          {item.name}
        </div>
      ))}

    </div>
  );
};

export default ComponentList;