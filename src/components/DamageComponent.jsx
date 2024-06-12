import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './css/DamageComponent.css'; 

const DamageComponent = () => {
    const [isDamaged, setIsDamaged] = useState(false);
    const [compensation, setCompensation] = useState(); 

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
                                hidden
                            />
                        </Button>
                    </div>
                    <div className="box">
                        <Button variant="outlined" className="view-button">
                            View Damaged Photos
                        </Button>
                    </div>
                    <div className="box">
                        <Typography variant="h6" className="compensation-text">
                            Compensation: ${compensation}
                        </Typography>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DamageComponent;
