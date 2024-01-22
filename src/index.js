import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import { CategoriesPage } from "./Pages/CategoriesPage/CategoriesPage";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import { MainPage } from './Pages/Main page/MainPage';
import SingleCategotyPage from './Pages/SingleCategotyPage/SingleCategoryPage';
import { SingleProductPage } from './Pages/SingleProductPage/SingleProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/main_page',
        element: <MainPage />
      },
      {
        path: '/categories',
        element: <CategoriesPage />
      },
      {
        path: '/categories/:title',
        element: <SingleCategotyPage />
      },
      {
        path: '/*',
        element: <ErrorPage />
      },
      {
        path: '/products',
        element: <AllProductsPage />
      },
      {
        path: '/product',
        element: <SingleProductPage />
      },
    ]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
