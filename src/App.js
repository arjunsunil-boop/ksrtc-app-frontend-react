import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AddBus from './components/AddBus';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DeleteBus from './components/DeleteBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <div>
      <Navbar/>
      <ViewBus/>

    </div>
  );
}

export default App;
