import React, {useContext} from "react";
import AddItemButton from "./AddItemButton"
import ItemBox from "./ItemBox"
import { BoxContext } from "../context-providers/BoxContext";
import "./css/ItemBoxRenderer.css"

// Render all the ItemBoxes from the current session's state
// TODO: Connect backend REST API call to load items from the DB 
const ItemBoxRenderer = () => {
    const {boxes, addBox, deleteBox, goToPage} = useContext(BoxContext)

    return (
        <div>
            <h1 className="header">
                Add Your Household Items
            </h1>
            
            <AddItemButton addBoxHandler={addBox}></AddItemButton>
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {boxes.map(box => (
                <ItemBox
                    key={box.id}
                    itemName="Insert Item Here"
                    description="Insert Description Here"
                    price="Insert Price Here"
                    originalPhoto="Photo Here"
                    boxId={box.id}
                    deleteBoxFunction={deleteBox}
                    contextProviderRouter={goToPage}>
                </ItemBox>
            ))}
            </div>
        </div>
    )
}

export default ItemBoxRenderer