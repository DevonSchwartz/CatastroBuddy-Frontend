import { Box, Button } from '@mui/material';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const BoxStyle = {
    display: 'flex', 
    border: 1 
}
 
function ItemBox() {

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
                    marginLeft: '10%',
                    marginTop: '60px',
                    width: '30%',
                }}>
                    <button onClick={handleRemoveClick}>x</button>
                    {itemNameBox}
                    {descriptionBox}
                    {priceBox}
                    {uploadImage}
                    <Button variant="contained" color="primary" onClick={handleEditClick}>Edit Item</Button>
                </div>
            }
        </>
    );
}
 
export default ItemBox