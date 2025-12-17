// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import HeroSection from "./pages/students/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/students/Courses";
import  MyLearning  from "./pages/students/MyLearning";
import  Profile  from "./pages/students/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
         path:"profile",
         element:<Profile/>,
      },

    ],
  },
]);
function App() {
  return (
   <main>
      <RouterProvider router={appRouter} />;
      </main>
  );
}

export default App;