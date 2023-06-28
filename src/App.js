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
      <UserCom />
      <UserCom />
    </div>
  );
}
// react components
const UserCom = () => {
  return (
    <div>
      <h2>Venusha!</h2>
      <h2>Kelaniya!</h2>
      <h2>27!</h2>
    </div>
  );
};

export default App;
