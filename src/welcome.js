import './welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-nav">
        <button>Login</button>
      </div>
      
      <div className="welcome-body">
        <label className="welcome-body-text">
          Welcome to
        </label>
        <label className="welcome-body-sub-text">
          Amazing Project
        </label>
      </div>
    </div>
  );
}

export default Welcome;