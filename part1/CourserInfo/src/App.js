
import './App.css';
import Mensaje from './Mensaje.js';

const App = () => {
  return (
    <div className="App">
      <Mensaje color='blue' name='Charly' />
      <Mensaje color='orange' name='Bonfire' />
    </div>
  );
}

export default App;
