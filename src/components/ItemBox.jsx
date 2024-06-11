import { Box } from '@mui/material';
import React, {useState} from 'react'

const BoxStyle = {
    display: 'flex', 
    border: 1 
}
 
function ItemBox() {

    const [isVisible, setIsVisible] = useState(true);
    
    const handleRemoveClick = () => {
        setIsVisible(false);
    };

    const itemNameBox = (
        <Box
            color="black"
            bgcolor="gray" p={1}
            justifyContent="center"
            sx={BoxStyle}>
                <header>Item Name</header>
        </Box>
    );

    const descriptionBox = (
        <Box
            color="black"
            bgcolor="gray" p={1}
            justifyContent="center"
            sx={BoxStyle}>
                <header>Description</header>
        </Box>
    )

    const priceBox = (
        <Box
            color="black"
            bgcolor="gray" p={1}
            justifyContent="center"
            sx={BoxStyle}>
                <header>Price</header>
        </Box>
    )

    const uploadImage = (
        <Box
            color="black"
            bgcolor="gray" p={1}
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
                }}>
                    <button onClick={handleRemoveClick}>x</button>
                    {itemNameBox}
                    {descriptionBox}
                    {priceBox}
                    {uploadImage}
                </div>
            }
        </>
    );
}
 
export default ItemBox