import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './component/HomePage';
import BookCatalog from './component/BookCatalog';
import BookDetails from './component/BookDetails';
import ShoppingCart from './component/ShoppingCart';
import UserProfile from './component/UserProfile';
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
    path: '/books/:id',
    element: <BookDetails />
  },
  {
    path: '/cart',
    element: <ShoppingCart />
  },
  {
    path: '/profile',
    element: <UserProfile />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
  <div>
    <App></App>
  </div>
</RouterProvider>

    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
