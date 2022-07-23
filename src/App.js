
import './App.css';
import { Allroutes } from './Components/AllRoutes';
import { BottomFotter } from './Components/Footer';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
   
      <Allroutes /> 
      < BottomFotter/>
    </div>
  );
}

export default App;
