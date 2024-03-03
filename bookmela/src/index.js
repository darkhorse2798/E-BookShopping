import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './component/HomePage';
import BookCatalog from './component/BookCatalog';
import BookDetails from './component/BookDetails';
import ShoppingCart from './component/ShoppingCart';
import UserProfile from './component/UserProfile';
import SignUp from './component/SignUp'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/books',
    element: <BookCatalog />
  },
  {
    path: '/booksDetails/:id',
    element: <BookDetails />
  },
  {
    path: '/cart',
    element: <ShoppingCart />
  },
  {
    path: '/profile',
    element: <UserProfile />
  },
  {
    path: '/signup', 
    element: <SignUp /> 
  }
]);

ReactDOM.render(
  <RouterProvider router={router}>
    <Router>
      <App />
    </Router>
  </RouterProvider>,
  document.getElementById('root')
);
