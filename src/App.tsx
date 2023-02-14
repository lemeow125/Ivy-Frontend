import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
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
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
