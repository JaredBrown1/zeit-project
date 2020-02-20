import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="App">
      <img src="images/zelda-pic.jpg" alt="zelda" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <button>Add Email</button>
      </form>
    </div>
  );
}

export default App;
