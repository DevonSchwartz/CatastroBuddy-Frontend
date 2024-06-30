// Return true if the item at index inside the items array is non existent or the array is null
export const itemNotFound = (items, index, field) => {
    return !items || index >= items.length || !(items[index][field])
}

export const convertToBase64 = (e, setImage) => {
    setImage(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        setImage(base64);
    };

    reader.readAsDataURL(file);
}

export const API_ENDPOINT = 'http://127.0.0.1:5000'