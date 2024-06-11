import React from 'react';
import { useState } from 'react';
import './AddItemButton.css';

const AddItemButton = () => {
    const [divs, setDivs] = useState([]);

    const handleClick = () => {
        // Add a new div
        setDivs([...divs, <div key={divs.length}>Item</div>]);
    };

    return (
        <div>
            {divs.map((_, index) => (
                <div key={index} style={{ height: '50px', border: '1px solid black', marginBottom: '10px'}}></div>
            ))}
            <button onClick={handleClick}>
                Add Item
            </button>
        </div>
    );
};

export default AddItemButton;