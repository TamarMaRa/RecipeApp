import { useState } from "react";
import ErrorMessage from "../UI/ErrorMessage";
import "./RecipeImage.css";

const RecipeImage = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setFile(URL.createObjectURL(image));
    console.log(event.target);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (!file.type.startsWith("image/")) {
      setError({
        title: "Invalid input",
        message: "File must be an image",
      });
      console.log(error);
      return;
    }

    setFile(URL.createObjectURL(file));
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorMessage
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <p>Drag and drop image here</p>

      <div
        dropzone="copy"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="image-container"
      >
        {file && <img src={file} alt="uploaded-image" />}
      </div>
      <input
        id="input-file"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label htmlFor="input-file">Choose File</label>
    </div>
  );
};

export default RecipeImage;
