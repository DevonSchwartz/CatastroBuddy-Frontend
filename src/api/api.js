// import axios from 'axios';
const axios = require('axios');

const addressApi = axios.create({
    baseURL: 'http://localhost:3001', // Replace the port number if necessary
});

// export default axiosClient;

export const getClient = async(clientId) => {
    try {
        const response = await addressApi.get(`/${clientId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAllItems = async(clientId) => {
    try {
        return getClient(clientId).items;
    } catch (error) {
        console.error(error);
    }
    
};

export const addItem = async (clientId, item) => {
    const client = await getClient(clientId);
    if (client) {
        item.itemId = client.items.length + 1;
        client.items.push(item);
        await addressApi.put(`/${clientId}`, client, { headers: { 'Content-Type': 'application/json' }});
    } 
};

export const removeItem = async (clientId, itemId) => {
    const client = await getClient(clientId);
    if (client) {
        client.items.filter(item => item.itemId !== itemId);
        await addressApi.put(`/${clientId}`, client, { headers: { 'Content-Type': 'application/json' }});
    } 
};