import React, { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import { API_ENDPOINT } from '../utils';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);
  const [items, setItems] = useState(() => {
    const data = localStorage.getItem('items'); // get the data from local storage
    return data ? JSON.parse(data) : [];
  });

  const navigate = useNavigate();


  // Delete an item from the server
  // nextFunction: function to execute on successful response
  // index: index of the item to delete [0,items.length - 1]
  const deleteItemServer = (nextFunction, index) => {
    // do not delete if there are no items
    if (items.length >= 1) {
      const clientId = localStorage.getItem('clientId')
      const _item_id = items?.[index]._item_id
      fetch (`${API_ENDPOINT}/entry/${clientId}/${_item_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Network response was not ok: status ${response.status}`)
          }
      })
      .then(() => {
          nextFunction()
      })
      .catch((error) => { 
          console.error('There has been a problem with your fetch operation:', error) 
      })
    } else {
        nextFunction()
    }
  }
    

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
    deleteItemServer(() => {
      const newItems = [
        ...items?.slice(0, index),
        ...items?.slice(index + 1)
      ]
      if (items) {
        setItems(newItems)
      }
      setBoxes(boxes.filter(box => box.id !== id));
    }, index)
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