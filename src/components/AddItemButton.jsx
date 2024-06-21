import './css/AddItemButton.css';
import React, {useContext} from "react";
import { BoxContext } from "../context-providers/BoxContext";


// Add an ItemBox onto the user's item page. It will execute the
// handler to add a box
// addBoxHandler: function pointer that will add an ItemBox to the BoxContext
const AddItemButton = () => {

    // function from Box-Provider to add box
    const {items, boxes, addBox} = useContext(BoxContext)


    const handleClick = () => {
        if (items?.length === boxes?.length) {
            addBox()
        }
    };

    return (
        <div className="container">
            <div className="button-container">
                <button onClick={handleClick}>
                    Add Item
                </button>
            </div>
        </div>
    );
};

export default AddItemButton;
