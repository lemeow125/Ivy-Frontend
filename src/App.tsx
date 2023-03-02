import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Error from "./Routes/Error/Error";
import Products from "./Routes/Products/Products";
import Logs from "./Routes/Logs/Logs";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";
import AddProduct from "./Routes/Products/AddProduct/AddProduct";
import EditProduct from "./Routes/Products/EditProduct/EditProduct";
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
  {
    path: "/Logs",
    element: (
      <Container>
        <Logs />
      </Container>
    ),
  },
  {
    path: "/Products/AddProduct",
    element: (
      <Container>
        <AddProduct />
      </Container>
    ),
  },
  {
    path: "/Products/EditProduct/:id", // Updated route with dynamic id parameter
    element: (
      <Container>
        <EditProduct />
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
