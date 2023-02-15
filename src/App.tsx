import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Error from "./Routes/Error/Error";
import Products from "./Routes/Products/Products";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <Container>
          <Dashboard />
        </Container>
      </React.StrictMode>
    ),
    errorElement: (
      <React.StrictMode>
        <Container>
          <Error />
        </Container>
      </React.StrictMode>
    ),
  },
  {
    path: "/Products",
    element: (
      <React.StrictMode>
        <Container>
          <Products />
        </Container>
      </React.StrictMode>
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
