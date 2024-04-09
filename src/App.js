import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DeleteBus from './components/DeleteBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>

      <Route path='/' element ={<Home/>}/>
      <Route path='/add' element ={<AddBus/>}/>
      <Route path='/search' element ={<Search/>}/>
      <Route path='/view' element ={<ViewBus/>}/>
      <Route path='/delete' element ={<DeleteBus/>}/>
    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
