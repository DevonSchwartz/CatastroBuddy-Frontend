import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  const navigate = useNavigate();

  const addBox = () => {
    setBoxes([...boxes, { id: Date.now() }]);
  };

  const deleteBox = (id, index) => {
    let clientJSON = JSON.parse(localStorage.getItem("clientJSON")); 

    const newItems = [
      ...clientJSON?.items?.slice(0, index),
      ...clientJSON?.items?.slice(index + 1)
    ]

    if (clientJSON?.items) {
      clientJSON.items = newItems
    }

    localStorage.setItem('clientJSON', JSON.stringify(clientJSON));

    setBoxes(boxes.filter(box => box.id !== id));
  };

  const goToPage = (path, state) => {
    navigate(path, state);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox, deleteBox, goToPage }}>
      {children}
    </BoxContext.Provider>
  );
};