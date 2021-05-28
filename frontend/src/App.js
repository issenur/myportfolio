import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ClickCount from './Components/ClickCount';

function App() {
  return (
    <div className="App">
      <div className=" row">
        <div className = "col" id="colorgray">
          <h1>Nav Bar</h1>
        </div>
      </div>
      <div className="row">
        <div className = "col" id="colorblue">
          <h1>Side Bar</h1>
        </div>
        <div className = "col" id="lightGB">
          <h1>Most Content</h1>
        </div>
      </div>
      <div className="row">
        <div className = "col" id="colorgray">
          <h1>Footer</h1>
        </div>
      </div>
    </div>

  );
}
export default App;
