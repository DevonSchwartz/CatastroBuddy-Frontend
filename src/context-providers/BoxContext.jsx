import React, { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  const [items, setItems] = useState([])
  const [clientId, setClientId] = useState("")
  const navigate = useNavigate();

  const addBox = () => {
    setBoxes([...boxes, { id: Date.now() }]);
  };

  const deleteBox = (id, index) => {
    const newItems = [
      ...items?.slice(0, index),
      ...items?.slice(index + 1)
    ]

    if (items) {
      setItems(newItems)
    }

    // localStorage.setItem('clientJSON', JSON.stringify(storedData));

    setBoxes(boxes.filter(box => box.id !== id));
  };

  const goToPage = (path, state) => {
    navigate(path, state);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox, deleteBox, goToPage, items, setItems, clientId, setClientId}}>
      {children}
    </BoxContext.Provider>
  );
};