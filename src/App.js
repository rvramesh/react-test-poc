import logo from './logo.svg';
import './App.css';
import { ColoredApp } from './context/ColorContext';
import SpecialControl from './context/SpecialControl';

function App() {
  return (
   <ColoredApp>
    <SpecialControl onClick={()=>console.log("In outside control")}></SpecialControl>
   </ColoredApp>
  );
}

export default App;
