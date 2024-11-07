import React, { useState } from "react";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Web App</h1>
      </header>
      <main>
        {!loggedIn ? (
          <div>
            <h2>Please login</h2>
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            <h2>Welcome back!</h2>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 My Web App</p>
      </footer>
    </div>
  );
}

export default App;
