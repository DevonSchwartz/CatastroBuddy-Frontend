import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Welcome from './components/welcome';
import AddItemButton from './components/AddItemButton';
import DamageComponent from './components/DamageComponent';
import EditItem from './components/editItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/AddItems" element={<AddItemButton />}/>
            <Route path="/Damage" element={<DamageComponent />}/>
            <Route path="/editItem" element={<EditItem />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>  
);

