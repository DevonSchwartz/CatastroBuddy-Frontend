import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  const navigate = useNavigate();

  const addBox = () => {
    setBoxes([...boxes, { id: Date.now() }]);
  };

  const deleteBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox, deleteBox, goToPage }}>
      {children}
    </BoxContext.Provider>
  );
};