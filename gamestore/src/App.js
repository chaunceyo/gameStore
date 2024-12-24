import React from 'react';
import { BrowserRouter, Router,Route,Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import Header from './Header/header';
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home/Home';
import PlayStation from './Pages/Playstation/Playstation'
import Xbox from './Pages/Xbox/Xbox'
import ItemPage from './Pages/Home/ItemPage';



function App() {

  return (
    
    <BrowserRouter>
      <Auth0Provider>
        <div className="App">
          <Header/>
          <NavBar/>
          <nav className='App-nav'>
            <Routes>
              <Route  path='/' element={<Home/>}></Route>
              <Route  path='/playstation' element={<PlayStation/>}></Route>
              <Route  path='/xbox' element={<Xbox/>}></Route>
              <Route  path={`/item/:gameName`} element={<ItemPage/>}/>
            </Routes>
          </nav>
        </div>
        </Auth0Provider>
        </BrowserRouter>
  );
}

export default App;