import React from 'react';
import {NavLink,useLocation,Link} from 'react-router-dom'
import logo from '../assets/images/restaurant_logo.png';


const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  
  // Function to conditionally apply CSS class based on query parameter value
   const fontLink = (teamName) => {
    const queryParam = new URLSearchParams(location.search).get('team');
    return queryParam === teamName ? 'text-white font-semibold bg-purple-500 hover:text-gray-300 rounded-md px-3' 
                                    : 'text-white bg-purple-500 hover:text-gray-300 rounded-md px-3';
  };


    return (
        <div className="w-full lg:w-1/4 p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-center">
            <Link to='/Restaurant-Management/'><img
              src={logo}
              alt="Profile"
              className="w-30 h-30 rounded-full"
            />
            </Link>
        </div>
        <Link to='/Restaurant-Management/' className='text-yellow-300 hover:underline'>
  <h2 className="text-2xl font-bold">Food Sense Restaurant</h2>
</Link>
            
            <p>Indulge: Where Flavor Meets Elegance.</p>
            <button className="w-full mt-4 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded flex items-center justify-center">
              <span className="material-icons"></span>
              Edit Profile
            </button>
            <ul className="mt-4 space-y-2">
              <li>foodSense.com</li>
              <li>Cuisine: North Indian, Italian, South Indian, Chinese, Korean</li>
            </ul>
            <hr className="my-4 border-gray-700" />
            <ul className="space-y-2">
              <li>
                <NavLink to='team?team=Operational' className={fontLink('Operational')} >
                 Operational Team
                </NavLink>  
              </li>

              <li>
                <NavLink to='team?team=Marketing'className={fontLink('Marketing')} >
                Marketing Team
                </NavLink>  
              </li>

              <li>
                <NavLink to='team?team=Chef' className={fontLink('Chef')} >
                 Chef Team
                </NavLink>  
              </li>

              <li>
                <NavLink to='team?team=Design' className={fontLink('Design')} >
                 Design Team
                </NavLink>  
              </li>
              
              </ul>
            <button className="w-full mt-4 border border-purple-500 text-purple-500 py-2 px-4 rounded">
              Create a team
            </button>
            <hr className="my-4 border-gray-700" />
            <ul className="space-y-2">
              <li>Restaurant menu</li>
              <li>Zomato orders</li>
              <li>Swiggy orders</li>
              <li>Table Reservation</li>
            </ul>
            <hr className="my-4 border-gray-700" />
            <ul className="space-y-2">
              <li>Raghavendra Verma - Member since Sep 2022</li>
              <li>Shiwendra Singh - Member since Aug 2022</li>
              <li>Ayushmaan Kaur - Member since Nov 2021</li>
            </ul>
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
              Show All
            </button>
          </div>
    );
}

export default Sidebar;
