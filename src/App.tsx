import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Error from "./Routes/Error/Error";
import Products from "./Routes/Products/Products";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";
import Inventory from "./Routes/Inventory/Inventory";

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
]);

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
