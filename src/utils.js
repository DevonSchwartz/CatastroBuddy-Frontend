// Return true if the item at index inside the items array is non existent or the array is null
export const itemNotFound = (items, index, field) => {
    return !items || index >= items.length || !(items[index][field])
}