import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import ItemByCategory from "./pages/ItemByCategory";
import ItemDetail from "./pages/ItemDetail";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/category-item/:cata",
          element: <ItemByCategory />,
        },
        {
          path: "/item-detail/:id",
          element: <ItemDetail />,
        },
        { path: "/about-page", 
          element: <About /> 
        },
        {
          path: "/contact-page",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
