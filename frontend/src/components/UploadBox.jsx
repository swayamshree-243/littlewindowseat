import { useState } from "react";

function UploadBox() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {file && (
        <p>
          Selected: {file.name}
        </p>
      )}
    </div>
  );
}

export default UploadBox;