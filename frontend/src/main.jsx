import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OurStoryPage from "./pages/OurStoryPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "events",
        element: <EventsPage />
      },
      {
        path: "menu",
        element: <MenuPage />
      },
      {
        path: "our-story",
        element: <OurStoryPage />
      },
      {
        path: "shop",
        element: <ShopPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
