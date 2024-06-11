import React, { useState } from 'react';
import './css/editItem.css';

const EditItem = ({ item }) => {
  const defaultItem = {
    name: 'Sample Item',
    description: 'This is a sample item.',
    price: 100,
  };

  const [name, setName] = useState(item?.name || defaultItem.name);
  const [description, setDescription] = useState(item?.description || defaultItem.description);
  const [price, setPrice] = useState(item?.price || defaultItem.price);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { name, description, price, image });
  };

  return (
    <div className="edit-item">
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
