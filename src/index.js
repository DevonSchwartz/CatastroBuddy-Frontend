import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItemBox from './components/ItemBox';
import Login from './components/login';
import AddItemButton from './components/AddItemButton';
import EditItem from './components/editItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddItemButton />
  </React.StrictMode>
);

