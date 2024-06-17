import './css/welcome.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="welcome">
      <div className="welcome-nav">
        <button onClick={handleLogin}>Login</button>
      </div>
      
      <div className="welcome-body">
        <label className="welcome-body-text">
          Welcome to
        </label>
        <label className="welcome-body-sub-text">
          CatastroBuddy
        </label>
      </div>
    </div>
  );
}


export default Welcome;