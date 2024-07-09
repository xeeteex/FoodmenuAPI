import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Page1 } from "./pages/sub-pages/Page1";
import Page2 from "./pages/sub-pages/Page2";
import { RootLayout } from "./components/RootLayout";
import DetailPage from "./pages/sub-pages/DetailPage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        
        {
          path: "detail/:id",
          element: <DetailPage/>
        },
        {
          path: "contact",
          element: <Contact />,
        },

        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
