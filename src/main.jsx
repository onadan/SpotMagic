import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MyHeader from "./components/MyHeader";
import "./index.css";
import Redirect from "./Redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/redirect",
    element: <Redirect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <>
        <MyHeader />
        <RouterProvider router={router} />
      </>
    </AnimatePresence>
  </React.StrictMode>
);
