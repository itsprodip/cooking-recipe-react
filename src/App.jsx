import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet, useParams } from "react-router";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Components/Home/Home";
import Recipies from "./Pages/Recipies";
import AboutUs from "./Pages/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://dummyjson.com/recipes").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "recipes/:recepeId",
        loader: ({ params }) => {
          return fetch(`https://dummyjson.com/recipes/${params.recepeId}`);
        },
        element: <Recipies />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
