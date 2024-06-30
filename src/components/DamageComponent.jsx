import React, { useState, useContext} from 'react';

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './css/DamageComponent.css'; 
import { BoxContext } from "../context-providers/BoxContext";
import { convertToBase64, API_ENDPOINT} from '../utils';



// Integrated into the item box component for users to toggle
// a damaged item
// We keep damaged photo in server even if user toggles back to undamaged
// index (number): the box index of a household item. Used to update items list
const DamageComponent = (props) => {
    const {items, setItems} = useContext(BoxContext)
    const index = props.index
    const [isDamaged, setIsDamaged] = useState(items?.[index].damaged);

    // needed for dyanmic updates of the damaged image
    const [damagedImage, setDamagedImage] = useState(items?.[index].damagedPhoto) 

    // update the damage status of the item on the server
    // nextFunction: function to execute on successful response
    const updateDamage = (nextFunction, newImage) => {
        const clientId = localStorage.getItem('clientId')
        const _item_id = items?.[index]._item_id
        console.log(items)

        fetch (`${API_ENDPOINT}/entry/${clientId}/${_item_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemName: items?.[index].itemName,
                description: items?.[index].description,
                price: items?.[index].price,
                originalPhoto: items?.[index].originalPhoto, 
                damaged: !newImage ? !items[index].damaged : items[index].damaged,
                damagedPhoto: newImage ? newImage : items?.[index].damagedPhoto
            })
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: status ${response.status}`)
            }
        })
        .then(() => {
            nextFunction()
        })
        .catch((error) => { 
            console.error('There has been a problem with your fetch operation:', error) 
        })
    }

    // toggle the damaged state of the item
    const handleToggle = () => {
        if (items?.[index]) {
            updateDamage(() => {
                items[index].damaged = !items[index].damaged
                setIsDamaged(items[index].damaged);
                setItems(items)
                localStorage.setItem('items', JSON.stringify(items));
            }, null)
        }
    };

    // set damagedPhoto field in items to base64 damaged image
    // image: base64
    const updateDamageImage = (image) => {
        if (items?.[index]) {
            updateDamage(() => {
                items[index].damagedPhoto = image
                setDamagedImage(items[index].damagedPhoto)
                setItems(items)
                localStorage.setItem('items', JSON.stringify(items));
            }, image)
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
