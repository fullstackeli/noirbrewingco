import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import OurStoryPage from "./pages/OurStoryPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
    }, {
      path: "/events",
      element: <EventsPage />
    }, {
      path: "/menu",
      element: <MenuPage />
    }, {
      path: "/our-story",
      element: <OurStoryPage />
    }, {
      path: "/shop",
      element: <ShopPage />
    }
  ] 
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
