import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import Header from './Pages/Header/Header';
import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import PlayStation from './Pages/Playstation/Playstation'
import Xbox from './Pages/Xbox/Xbox'
import ItemPage from './Pages/Home/ItemPage';
import { CallbackPage } from './Auth0/callback-page';



function App() {

  return (


    <div className="App">
      <Header />
      <NavBar />
      <nav className='App-nav'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/playstation' element={<PlayStation />}></Route>
          <Route path='/xbox' element={<Xbox />}></Route>
          <Route path={`/item/:gameName`} element={<ItemPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </nav>
    </div>

  );
}

export default App;