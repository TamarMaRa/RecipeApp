import { useState, useRef } from "react";
import ErrorMessage from "../UI/ErrorMessage";
import "./RecipeImage.css";

const RecipeImage = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError({
        title: "Invalid input",
        message: "File must be a single image",
      });
      return;
    }

    setFile(URL.createObjectURL(file));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    handleImageChange(event.target.files[0]);
    event.target.value = "";
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
    handleImageChange(event.dataTransfer.files[0]);
  };

  const errorHandler = () => {
    setError(null);
  };

  const deleteImageHandler = () => {
    setFile(null);
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

      <div
        dropzone="copy"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="image-container"
      >
        {!file && <p>Upload image</p>}
        {file && <img src={file} alt="uploaded-image" />}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button onClick={deleteImageHandler}>Remove Image</button>
    </div>
  );
};

export default RecipeImage;
