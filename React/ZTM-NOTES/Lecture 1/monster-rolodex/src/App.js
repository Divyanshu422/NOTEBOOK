import { useState, useEffect } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <div className="App">
      {monsters.map((monster) => {
        return (
          <div key={monster?.id}>
            <h1>{monster?.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
