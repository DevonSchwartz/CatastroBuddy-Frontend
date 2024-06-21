import React, {useState, useContext} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { BoxContext } from "../context-providers/BoxContext";
import './css/editItem.css';


// Page to edit the information of a specific household item
// If item is null, then we are adding a household item to the database
// Four fields: name, description, price (number), originalPhoto (base64)
const EditItem = () => {
  const location = useLocation();
  const { state } = location; // item and index passed in from box

  const {items, setItems} = useContext(BoxContext)
  
  const defaultItem = {
    name: 'Sample Item',
    description: 'This is a sample item.',
    price: 100,
  };

  const [name, setName] = useState(state?.item?.itemName || defaultItem.name);
  const [description, setDescription] = useState(state?.item?.description || defaultItem.description);
  const [price, setPrice] = useState(state?.item?.price || defaultItem.price);
  const [image, setImage] = useState(state?.item?.originalPhoto || defaultItem.originalPhoto);
  // const [newItems, setNewItems] = useState([])
  
  // if (items && state?.index >= items.length) {
  //   setNewItems([...items, state.item])
  // } else {
  //   setNewItems(items)
  // }

  let newItems = items && state?.index >= items.length ? [...items, state.item] : items


  // handler to save items to local storage. Will be trigged when save is pressed
  const saveToLocalStorage = () => {
    if (newItems?.[state?.index]) {
      newItems[state.index].itemName = name
      newItems[state.index].description = description
      newItems[state.index].price = price
      newItems[state.index].originalPhoto = image
      setItems(newItems)
      console.log(items)
    }
  };

  
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        setImage(base64);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { name, description, price, image });
  };

  const handleCancel = () => {
    navigate(-1);
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
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" onClick={() => {
          navigate(-1)
          saveToLocalStorage()
        }}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditItem;
