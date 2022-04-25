import logo from './logo.svg';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Homescreen from './Screen/Homescreen';
function App() {
  return (
    <div className="App">
      {/* <h1>Pizza_hut</h1> */}
      <Navbar />
      <Homescreen/>
    </div>
  );
}

export default App;
