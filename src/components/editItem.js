import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../schema';
import { addItem } from '../api/api';
import './css/editItem.css';

const EditItem = ({ item }) => {
  const defaultItem = {
    name: 'Sample Item',
    description: 'This is a sample item.',
    price: 100,
  };

  const [userName, setUserName] = useState('')
  const [name, setName] = useState(item?.name || defaultItem.name);
  const [description, setDescription] = useState(item?.description || defaultItem.description);
  const [price, setPrice] = useState(item?.price || defaultItem.price);
  const [image, setImage] = useState(null);
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


  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name)
    }}, []
  )

  let newItem = new Item(); 

  Item.itemID = Math.random();
  Item.itemName = name;
  Item.description = description
  Item.price = price
  Item.damaged = false
  Item.description = description
  Item.photo = image


  addItem(userName, newItem)

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
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditItem;
