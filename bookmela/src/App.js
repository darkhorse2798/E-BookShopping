import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import BookCatalog from './component/BookCatalog';
import BookDetails from './component/BookDetails';
import ShoppingCart from './component/ShoppingCart';
import UserProfile from './component/UserProfile';
import SignUp from './component/SignUp'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookCatalog />} />
        <Route path="/booksDetails/:id" element={<BookDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </div> 
  );
}

export default App;
