import React, { useEffect } from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Error from "./Routes/Error/Error";
import Products from "./Routes/Products/Products";
import Logs from "./Routes/Logs/Logs";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";
import Inventory from "./Routes/Inventory/Inventory";
import Login from "./Routes/Login/Login";
import Product from "./Routes/Product/Product";
import Activation from "./Routes/Activation/Activation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Dashboard />
      </Container>
    ),
    errorElement: (
      <Container>
        <Error />
      </Container>
    ),
  },
  {
    path: "/Products",
    element: (
      <Container>
        <Products />
      </Container>
    ),
  },
  {
    path: "/Inventory",
    element: (
      <Container>
        <Inventory />
      </Container>
    ),
  },
  {
    path: "/Logs",
    element: (
      <Container>
        <Logs />
      </Container>
    ),
  },
  {
    path: "/Login",
    element: (
      <Container>
        <Login />
      </Container>
    ),
  },
  {
    path: "/Product/:id",
    element: (
      <Container>
        <Product />
      </Container>
    ),
  },
  {
    path: "/Activation/:uid/:token",
    element: (
      <Container>
        <Activation />
      </Container>
    ),
  },
]);

export default function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
