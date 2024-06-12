import { Box } from '@mui/material';
import React, { useState } from 'react';
import DamageComponent from './DamageComponent';

const BoxStyle = {
    display: 'flex',
    border: 1,
    fontFamily: 'Arial, sans-serif'
}

function ItemBox() {

    const [isVisible, setIsVisible] = useState(true);

    const handleRemoveClick = () => {
        setIsVisible(false);
    };

    const itemNameBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <header>Item Name</header>
        </Box>
    );

    const descriptionBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <header>Description</header>
        </Box>
    )

    const priceBox = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <header>Price</header>
        </Box>
    )

    const uploadImage = (
        <Box
            color="black"
            bgcolor="white" p={1}
            justifyContent="center"
            sx={BoxStyle}>
            <img alt='Original Photo'></img>
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
                        <div style={{ width: '30px' }}> {}
                            <button onClick={handleRemoveClick}>x</button>
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
