import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Plugins/Redux/Store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
