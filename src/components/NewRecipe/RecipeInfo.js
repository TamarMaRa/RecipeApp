import { useState, useRef } from "react";

import './RecipeInfo.css'

const RecipeInfo = ({ title, placeholder, onChange }) => {
  const nextId = useRef(2);
  const [items, setItems] = useState([{ id: 1, value: "" }]);

  const handleChange = (id, value) => {
    const index = items.findIndex((item) => item.id === id);

    let updated;

    if (value === "" && index !== items.length - 1) {
      return items.filter((item) => item.id !== id);
    } else {
      updated = items.map((item) =>
        item.id === id ? { ...item, value } : item,
      );

      const lastitem = updated[updated.length - 1];
      if (lastitem.value.trim() !== "") {
        updated.push({
          id: nextId.current++,
          value: "",
        });
      }
    }

    setItems(updated);

    onChange(
      updated
        .filter((item) => item.value.trim() !== "")
        .map((item) => item.value.trim()),
    );
    return updated;
  };

  return (
    <div className="input-list-container">
      <div>
        <h3>{title}</h3>
        {items.map((item, index) => (
          <input
            key={item.id}
            type="text"
            placeholder={`${placeholder} ${index + 1}`}
            value={item.value}
            onChange={(event) => handleChange(item.id, event.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeInfo;
