import React, { useState, useContext} from 'react';

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './css/DamageComponent.css'; 
import { BoxContext } from "../context-providers/BoxContext";




const DamageComponent = (props) => {
    const [isDamaged, setIsDamaged] = useState(false);
    const {items, setItems} = useContext(BoxContext)


    const handleToggle = () => {
        setIsDamaged(!isDamaged);
    };

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
                            Upload Photo
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                hidden
                            />
                        </Button>
                    </div>
                    <div className="box">
                        <Button variant="outlined" className="view-button">
                            View Damaged Photos
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DamageComponent;
