import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './welcome';
import Login from './login';
import ItemBox from './components/ItemBox';
import EditItem from './editItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EditItem />
  </React.StrictMode>
);

reportWebVitals();
