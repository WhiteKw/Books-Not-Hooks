import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Layouts/Home';
import Book from './Layouts/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id' element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
