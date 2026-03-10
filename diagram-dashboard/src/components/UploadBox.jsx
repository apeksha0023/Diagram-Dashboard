import React from "react";

const UploadBox = ({ setImage, fileName, setFileName }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange} />

      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
};

export default UploadBox;