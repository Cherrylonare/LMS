import React from 'react'
import Navbar from "../components/navbar";
import {Outlet} from'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <main className="pt-16 min-h-screen bg-gray-50">
<Outlet/>
</main>
</>
  );
};
export default MainLayout;
