import React, { createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  const [items, setItems] = useState(() => {
    const data = localStorage.getItem('items'); // get the data from local storage
    return data ? JSON.parse(data) : [];
  });

  const navigate = useNavigate();

  // add a single box
  const addBox = () => {
    setBoxes([...boxes, { id: uuidv4() }]);
  };

  // add multiple boxes at once
  // numBoxes: number of boxes to add to boxes
  const addBoxes = (numBoxes) => {
    const newBoxes = Array(numBoxes).fill().map(() => ({ id: uuidv4() }));
    setBoxes([...boxes, ...newBoxes]);
  }

  // delete a single box with the given id and index
  // id: the id of the box to delete
  // index: the index of the box in boxes
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
    <BoxContext.Provider value={{ boxes, addBox, addBoxes, deleteBox, 
      goToPage, items, setItems}}>
      {children}
    </BoxContext.Provider>
  );
};