import { Box, Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import DamageComponent from './DamageComponent';
import { useNavigate } from 'react-router-dom';

const BoxStyle = {
    display: 'flex',
    border: 1,
    fontFamily: 'Arial, sans-serif'
}

function ItemBox(props) {
    const itemName = props.itemName
    const description = props.description
    const price = props.price
    const originalPhoto = props.original


    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();
    
    const handleRemoveClick = () => {
        setIsVisible(false);
    };

    const handleEditClick = () => {
        navigate('/editItem');
    };

    const itemNameBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <header>{itemName}</header>
        </Box>
    );

    const descriptionBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>

            <header>{description}</header>
        </Box>
    )

    const priceBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <header>{price}</header>
        </Box>
    )

    const uploadImage = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <img src={originalPhoto} alt='Original Photo'></img>
        </Box>
    )

    return (
        <>
            {isVisible &&
                <div style={{
                    marginLeft: '25%',
                    marginTop: '60px',
                    width: '50%',
                    display: 'flex', 
                    gap: '20px', 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    overflow: 'hidden', 
                }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button onClick={handleRemoveClick}>x</button>
                            <Button variant="contained" color="primary" onClick={handleEditClick} style={{ marginLeft: '10px' }}>Edit Item</Button>
                        </div>
                        {itemNameBox}
                        {descriptionBox}
                        {priceBox}
                        {uploadImage}
                    </div>
                    <div style={{ flex: 1 }}>
                        <DamageComponent />
                    </div>
                </div>
            }
        </>
    );
}

export default ItemBox;
