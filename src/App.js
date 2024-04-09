import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AddBus from './components/AddBus';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
< AddBus/>
<Search/>
    </div>
  );
}

export default App;
