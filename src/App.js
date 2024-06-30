import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Welcome from './components/welcome';
import ItemBoxRenderer from './components/ItemBoxRenderer';
import DamageComponent from './components/DamageComponent';
import EditItem from './components/editItem';
import { BoxProvider } from './context-providers/BoxContext';
function App() {
  // clear local storage on page load
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify([]));
  }); 


  return (
    <React.StrictMode>
        <BrowserRouter>
            <BoxProvider>
                <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/AddItems" element={<ItemBoxRenderer />}/>
                        <Route path="/Damage" element={<DamageComponent />}/>
                        <Route path="/editItem" element={<EditItem />}/>
                </Routes>
            </BoxProvider>
        </BrowserRouter>
    </React.StrictMode>  
  );
}

export default App;