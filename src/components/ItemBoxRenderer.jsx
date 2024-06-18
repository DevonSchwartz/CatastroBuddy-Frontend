import React, {useContext, useEffect, useState} from "react";
import AddItemButton from "./AddItemButton"
import ItemBox from "./ItemBox"
import { BoxContext } from "../context-providers/BoxContext";
import "./css/ItemBoxRenderer.css"

// Render all the ItemBoxes from the current session's state
// TODO: Connect backend REST API call to load items from the DB 
const ItemBoxRenderer = () => {
    const {boxes, addBox, deleteBox, goToPage} = useContext(BoxContext)
    const [storedData, setStoredData] = useState(null);
    let items = null

    // Effect to load data from local storage on component mount
    useEffect(() => {
        const clientData = localStorage.getItem('clientJSON');
        if (clientData) {
            setStoredData(JSON.parse(clientData));
        }
    }, []);

    if (storedData) {
        items = storedData.items
    }

    // Return true if the item at index inside the items array is non existent or the array is null
    const itemNotFound = (index, field) => {
        return !items || index >= items.length || !(items[index][field])
    }

    return (
        <div>
            <h1 className="header">
                Add Your Household Items
            </h1>
            
            <AddItemButton addBoxHandler={addBox}></AddItemButton>
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <ItemBox
                        key={box.id}
                        itemName={itemNotFound(index, "itemName") ? `[Item]`: items[index].itemName}
                        description="Insert Description Here"
                        price="Insert Price Here"
                        originalPhoto="Photo Here"
                        boxId={box.id}
                        deleteBoxFunction={deleteBox}
                        contextProviderRouter={goToPage}>
                    </ItemBox>
                )
                )}
            </div>
        </div>
    )
}

export default ItemBoxRenderer