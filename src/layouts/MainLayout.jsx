import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/SidebarComponent';
import Navbar from '../Components/NavbarComponent';

const MainLayout = () => (
  <div className="bg-gray-900 text-white min-h-screen p-4">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <Sidebar />
        <div className="w-full lg:w-3/4 p-4">
        <div className="flex flex-wrap">
          <Navbar />
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default MainLayout;
