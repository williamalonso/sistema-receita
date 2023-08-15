import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Category from './components/Category';

const router = createBrowserRouter([
  {
    path: '/cuisine',
    element: <Category />,
  },
]);

export default function Route() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}