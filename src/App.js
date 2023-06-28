import "./App.css";

function App() {
  return (
    <div className="App">
      <UserCom name="Venusha" age={28} address="Kelaniya" />
      <UserCom name="Tharangi" age={27} address="Dehiattakandiye" />
    </div>
  );
}

// // normal js object
// const propsUser = {
//   name: "Thara",
//   add: "Dehiaththakandiye",
// };

// react components
const UserCom = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.address}</h2>
    </div>
  );
};

export default App;
