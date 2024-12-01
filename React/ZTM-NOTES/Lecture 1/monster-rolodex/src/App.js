function App() {
  const monsters = [
    { id: 1, name: "Frankestein" },
    { id: 2, name: "Dracula" },
    { id: 3, name: "zombie" },
  ];
  return (
    <div className="App">
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
