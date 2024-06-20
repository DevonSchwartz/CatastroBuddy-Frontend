import React, {useContext, useEffect, useState} from "react";
import AddItemButton from "./AddItemButton"
import ItemBox from "./ItemBox"
import { BoxContext } from "../context-providers/BoxContext";
import {itemNotFound} from "../utils"
import "./css/ItemBoxRenderer.css"

// Render all the ItemBoxes from the current session's state
// TODO: Connect backend REST API call to load items from the DB 
const ItemBoxRenderer = () => {
    const {boxes, addBox, deleteBox, goToPage} = useContext(BoxContext)
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        const clientData = localStorage.getItem('clientJSON');
        if (clientData) {
            setStoredData(JSON.parse(clientData));
        }
    }, []);

    return (
        <div>
            <h1 className="header">
                Add Your Household Items
            </h1>            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <ItemBox
                        key={box.id}
                        itemName={itemNotFound(storedData?.items,index,"itemName") ? `[Item]`: storedData.items[index].itemName}
                        description={itemNotFound(storedData?.items,index,"description") ? `[Description]`: storedData.items[index].description}
                        price={itemNotFound(storedData?.items,index,"description") ? `[Price]`: storedData.items[index].price}
                        originalPhoto={itemNotFound(storedData?.items,index,"originalPhoto") ? null: storedData.items[index].originalPhoto}
                        boxId={box.id}
                        boxIndex={index}
                        deleteBoxFunction={deleteBox}
                        contextProviderRouter={goToPage}>
                    </ItemBox>
                )
                )}
            </div>
            <div className="addButton">
                <AddItemButton addBoxHandler={addBox}></AddItemButton>
            </div>
        </div>
    )
}

export default ItemBoxRenderer