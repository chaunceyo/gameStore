import React, {useState} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home/Home';
import PlayStation from './Pages/Playstation/Playstation'
import Xbox from './Pages/Xbox/Xbox'



function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>gameStore</h1>
      </header>
      <NavBar/>
      <nav className='App-nav'>
        <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/playstation' element={<PlayStation/>}></Route>
          <Route  path='/xbox' element={<Xbox/>}></Route>
        </Routes>
      </nav>
      </div>
      </Router>
  );
}

export default App;