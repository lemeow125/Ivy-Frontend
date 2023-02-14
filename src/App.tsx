import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Error from "./Routes/Error/Error";
import Products from "./Routes/Products/Products";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={Store}>
        <Header />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </Provider>
    </React.StrictMode>
  );
}
