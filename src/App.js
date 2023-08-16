import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './Login/index'
import Register from "./Register/index";
import Register_NP from "./Register/index1"
import { Button } from "./Components/Button";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/register-email",
    element: <Register_NP/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
