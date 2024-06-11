import React, { useState } from 'react';
import './css/AddItemButton.css';
import ItemBox from './ItemBox';

const AddItemButton = () => {
    const [itemBoxes, setItemBoxes] = useState([]);

    const handleClick = () => {
        setItemBoxes([...itemBoxes, <ItemBox key={itemBoxes.length} />]);
    };

    return (
        <div className="container">
            <div className="button-container">
                <button onClick={handleClick}>
                    Add Item
                </button>
            </div>
            <div className="items-container">
                {itemBoxes.map((itemBox) => (
                    <div key={itemBox.key} style={{ marginBottom: '10px' }}>
                        {itemBox}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItemButton;
