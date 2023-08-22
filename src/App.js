import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from './navbar';
import Carddd2 from './card2';
import Cardddd3 from './cardddd3';
import Carddddd4 from './card4';
import './hamza.css';
import Cardd1 from './card1';

function App() {
  return (
    <div>
    <Navv/>
    <div className="cart">
      <Cardd1/>
    <Carddd2/>
    <Cardddd3/>
    <Carddddd4/>
    </div>
    </div>
  );
}

export default App;

