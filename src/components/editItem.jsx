import React, {useState, useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { BoxContext } from "../context-providers/BoxContext";
import { convertToBase64 } from '../utils';
import { API_ENDPOINT } from '../utils';
import './css/editItem.css';


// Page to edit the information of a specific household item
// If item is null, then we are adding a household item to the database
// Four fields: name, description, price (number), originalPhoto (base64)
const EditItem = () => {
  const location = useLocation();
  const { state } = location; // item and index passed in from box
  const {items, setItems, goToPage} = useContext(BoxContext)

  const defaultItem = {
    name: 'Sample Item',
    description: 'This is a sample item.',
    price: 100,
    originalPhoto: null,
    damaged: false,
    damagedPhoto: null,
    _item_id: ''
  };

  const [name, setName] = useState(state?.item?.itemName || defaultItem.name);
  const [description, setDescription] = useState(state?.item?.description || defaultItem.description);
  const [price, setPrice] = useState(state?.item?.price || defaultItem.price);
  const [image, setImage] = useState(state?.item?.originalPhoto || defaultItem.originalPhoto);
  const [damaged] = useState(state?.item?.damaged || defaultItem.damaged);
  const [damagedPhoto] = useState(state?.item?.damagedPhoto || defaultItem.damagedPhoto);
  const [_item_id, setItemId] = useState(state?.item?._item_id || defaultItem._item_id);
 

  let newItems = items && state?.index >= items.length ? [...items, state.item] : items


  useEffect(()=>{saveState()}, [_item_id]); // save the state when item id is updated by POST request

  // handler to save items to state variables. Will be trigged when save is pressed
  const saveState = () => {
    if (newItems?.[state?.index]) {
      newItems[state.index].itemName = name
      newItems[state.index].description = description
      newItems[state.index].price = price
      newItems[state.index].originalPhoto = image
      newItems[state.index].damaged = damaged
      newItems[state.index].damagedPhoto = damagedPhoto
      newItems[state.index]._item_id = _item_id
      setItems(newItems)
      console.log(items)
    }
  };

  // push new item to items in db
  const pushItem = () => {
    const clientId = localStorage.getItem('clientId')

    fetch (`${API_ENDPOINT}/entry/${clientId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        itemName: name,
        description: description,
        price: price,
        originalPhoto: image, 
        damaged: damaged,
        damagedPhoto: damagedPhoto
      })
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        }
        throw new Error(`Network response was not ok: status ${response.status}`)
      })
      .then((data) => {
        setItemId(data._item_id)
        goToPage(-1, null)
      })
      .catch((error) => { 
        console.error('There has been a problem with your fetch operation:', error) 
      })
  }

  // update the item in the db
  const updateItem = () => {
    const clientId = localStorage.getItem('clientId')

    fetch (`${API_ENDPOINT}/entry/${clientId}/${_item_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        itemName: name,
        description: description,
        price: price,
        originalPhoto: image, 
        damaged: damaged,
        damagedPhoto: damagedPhoto
      })
    })
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`Network response was not ok: status ${response.status}`)
        }
      })
      .then(() => {
        saveState()
        goToPage(-1, null)
      })
      .catch((error) => { 
        console.error('There has been a problem with your fetch operation:', error) 
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { name, description, price, image });
  };

  const handleCancel = () => {
    goToPage(-1, null)
  };

  return (
    <div className="edit-item">
      <button className="close-button" onClick={handleCancel}>x</button>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            onChange={(e) => {convertToBase64(e, setImage)}}
          />
        </div>
        <button type="submit" onClick={() => {
          if (state?.index >= items.length) {
            pushItem()
          } else {
            updateItem()
          }
        }}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditItem;
