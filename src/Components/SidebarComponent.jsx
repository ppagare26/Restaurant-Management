import React from 'react';
import { Link,useSearchParams } from 'react-router-dom';
import { HomeIcon, PresentationChartBarIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid'; // Example imports, adjust as per your icon library
import logo from '../assets/images/restaurant_logo.png';

const Sidebar = () => {
  const fontLink = (teamName) => {
    // Simulating query param for active state
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('team');
   

    return queryParam === teamName
      ? 'text-gray-900  bg-purple-500 rounded-md px-3 py-2 flex items-center'
      : 'text-gray-300 hover:text-gray-100 rounded-md px-3 py-2 flex items-center';
  };

  return (
    <div className="w-full lg:w-1/4 p-4">
      {/* Logo and restaurant name */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex justify-center">
          <Link to='/Restaurant-Management/'>
            <img src={logo} alt="Profile" className="w-20 h-20 rounded-full" />
          </Link>
        </div>
        <Link to='/Restaurant-Management/' className='text-yellow-300 hover:underline block text-center mt-2 mb-1'>
          <h2 className="text-xl font-bold">Food Sense Restaurant</h2>
        </Link>
        <p className="text-center text-xs">Indulge: Where Flavor Meets Elegance.</p>
        <button className="w-full mt-2 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded flex items-center justify-center">
          <span className="material-icons"></span>
          Edit Profile
        </button>
      </div>

      {/* Team links */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <ul className="space-y-2">
          <li>
            <Link to='team?team=Operational Team' className={fontLink('Operational Team')}>
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
              Operational Team
            </Link>
          </li>

          <li>
            <Link to='team?team=Marketing Team' className={fontLink('Marketing Team')}>
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Marketing Team
            </Link>
          </li>

          <li>
            <Link to='team?team=Chef Team' className={fontLink('Chef Team')}>
              <UsersIcon className="h-5 w-5 mr-2" />
              Chef Team
            </Link>
          </li>

          <li>
            <Link to='team?team=Design Team' className={fontLink('Design Team')}>
              <HomeIcon className="h-5 w-5 mr-2" />
              Design Team
            </Link>
          </li>
        </ul>
        <button className="w-full mt-2 border border-purple-500 text-purple-500 py-2 px-4 rounded">
          Create a team
        </button>
      </div>

      {/* Other links */}
      <hr className="my-4 border-gray-700" />
      <ul className="bg-gray-800 rounded-lg p-4 space-y-2 text-xs">
        <li>Restaurant menu</li>
        <li>Zomato orders</li>
        <li>Swiggy orders</li>
        <li>Table Reservation</li>
      </ul>

      <hr className="my-4 border-gray-700" />
      <ul className="bg-gray-800 rounded-lg p-4 space-y-2 text-xs">
        <li>Raghavendra Verma - Member since Sep 2022</li>
        <li>Shiwendra Singh - Member since Aug 2022</li>
        <li>Ayushmaan Kaur - Member since Nov 2021</li>
      </ul>

      <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
        Show All
      </button>
    </div>
  );
};

export default Sidebar;
