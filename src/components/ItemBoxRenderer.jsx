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
    let items = null

    useEffect(() => {
        const clientData = localStorage.getItem('clientJSON');
        if (clientData) {
            setStoredData(JSON.parse(clientData));
        }
    }, []);

    if (storedData) {
        items = storedData.items
    }

    return (
        <div>
            <h1 className="header">
                Add Your Household Items
            </h1>            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <ItemBox
                        key={box.id}
                        itemName={itemNotFound(items,index,"itemName") ? `[Item]`: items[index].itemName}
                        description={itemNotFound(items,index,"description") ? `[Description]`: items[index].description}
                        price={itemNotFound(items,index,"description") ? `[Price]`: items[index].price}
                        originalPhoto={itemNotFound(items,index,"originalPhoto") ? null: items[index].originalPhoto}
                        boxId={box.id}
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