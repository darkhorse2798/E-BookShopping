import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import BookCatalog from './component/BookCatalog';
import BookDetails from './component/BookDetails';
import ShoppingCart from './component/ShoppingCart';
import UserProfile from './component/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
      <div> 
       <HomePage />
    <BookCatalog />
    <BookDetails />
    <ShoppingCart />
    <UserProfile />
      </div> 
  );
}

export default App;
