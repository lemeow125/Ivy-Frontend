import React from "react";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
export default function App() {
  return (
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
