import React, { useState, useContext} from 'react';

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './css/DamageComponent.css'; 
import { BoxContext } from "../context-providers/BoxContext";
import { convertToBase64 } from '../utils';



// Integrated into the item box component for users to toggle
// a damaged item
// index (number): the box index of a household item. Used to update items list
const DamageComponent = (props) => {
    const {items, setItems} = useContext(BoxContext)
    const index = props.index
    const [isDamaged, setIsDamaged] = useState(items?.[index].damaged);

    // needed for dyanmic updates of the damaged image
    const [damagedImage, setDamagedImage] = useState(items?.[index].damagedPhoto) 


    // toggle the damaged state of the item
    const handleToggle = () => {
        setIsDamaged(!isDamaged);
        if (items?.[index]) {
            items[index].damaged = !items[index].damaged
            setItems(items)
            localStorage.setItem('items', JSON.stringify(items));
        }
    };

    // set damagedPhoto field in items to base64 damaged image
    // image: base64
    const updateDamageImage = (image) => {
        if (items?.[index]) {
            items[index].damagedPhoto = image
            setDamagedImage(items[index].damagedPhoto)
            setItems(items)
            localStorage.setItem('items', JSON.stringify(items));
        }
    }

    return (
        <div className="damage-container" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="damage-toggle">
                <label className="damage-label">Is damaged?</label>
                <Switch
                    checked={isDamaged}
                    onChange={handleToggle}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            {isDamaged && (
                <div>
                    <div className="box">
                        <Button variant="contained" component="label" className="upload-button">
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={(e) => {convertToBase64(e, updateDamageImage)}}
                            />
                        </Button>
                    </div>
                    <div className="box">
                        <img src={`data:image/png;base64, ${damagedImage}`} alt='Damaged Photo' 
                            width={250} height={250}></img>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DamageComponent;
