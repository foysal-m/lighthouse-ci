// src/App.js
import { useState, useEffect } from "react";
import { worker, generateHandler } from "./mocks/browser";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [useMock, setUseMock] = useState(false);

  useEffect(() => {
    // Retrieve the state from localStorage on mount
    const storedUseMock = localStorage.getItem("useMock") === "true";
    setUseMock(storedUseMock);

    // Start or stop the worker based on the localStorage value
    if (storedUseMock) {
      worker.start();
    } else {
      worker.stop();
    }
  }, []);

  const handleToggleChange = () => {
    // Update the local storage with the toggle state
    const newUseMock = !useMock;
    localStorage.setItem("useMock", String(newUseMock));
    setUseMock(newUseMock);

    // Start or stop the worker based on the new toggle state
    if (newUseMock) {
      worker.start();
    } else {
      worker.stop();
    }
  };

  const getUsers = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await fetch(useMock ? apiUrl : "/api/users");
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <label className="switch">
        <input
          type="checkbox"
          checked={useMock}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
      <button onClick={getUsers}>Fetch users</button>
      {users && users.map((user) => <h1 key={user.id}>{user.name}</h1>)}
    </div>
  );
}

export default App;
