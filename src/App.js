import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth";
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Auth />
    </div>
  );
}

export default App;
