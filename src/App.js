import "./App.css";

function App() {
  // jsx
  const name = <h3>Venusha Amarathunga</h3>;
  const add = <h3>Kelaniya</h3>;
  const user = (
    <div>
      {name} {add}
    </div>
  );

  return (
    <div className="App">
      Hello {name}!<h1> {name} </h1>
      I'm in {add}
      <br />
      {user}
    </div>
  );

  // js function
  const GetName = () => {
    return "Venusha";
  };

  // react components
  const GetNameCom = () => {
    return <h2>New component Venusha!</h2>;
  };
}

export default App;
