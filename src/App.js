import logo from './logo.svg';
import './App.css';
import Header from './partials/Header';
import Fotter from './partials/Fotter';
/*import './Routing.js';*/
import Routing from './Routing';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Fotter></Fotter>
      <Routing></Routing> 
    </div>
  );
}

export default App;
