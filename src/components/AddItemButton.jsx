import './css/AddItemButton.css';

// Add an ItemBox onto the user's item page. It will execute the
// handler to add a box
// addBoxHandler: function pointer that will add an ItemBox to the BoxContext
const AddItemButton = (props) => {

    // function from Box-Provider to add box
    const addBoxHandler = props.addBoxHandler
    const totalNumBoxes = props.totalNumBoxes

    let clientJSON = JSON.parse(localStorage.getItem("clientJSON")); 


    const handleClick = () => {
        console.log(totalNumBoxes)
        console.log(clientJSON?.items?.length)
        if (clientJSON?.items?.length === totalNumBoxes) {
            addBoxHandler()
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
