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
import SalePage from './Pages/SalePage/SalePage';
import SingleCategoryPage from './Pages/SingleCategoryPage/SingleCategoryPage';
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
        path: '/categories/:id',
        element: <SingleCategoryPage />
      },

      {
        path: '/products',
        element: <AllProductsPage />
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />
      },
      {
        path: '/categories/:id/:id',
        element: <SingleProductPage />
      },
      {
        path: '/sales/:id',
        element: <SingleProductPage />
      },
      {
        path: '/sales',
        element: <SalePage />
      },
      {
        path: '/*',
        element: <ErrorPage />
      },
    ]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
