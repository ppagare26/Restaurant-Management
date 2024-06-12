import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} 
from 'react-router-dom'
import 'chart.js/auto'; // This ensures all necessary components are registered
import MainLayout from './layouts/MainLayout';
import HomePage from './screens/HomePage';
import TeamView from './screens/TeamView';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/Restaurant-Management/' element={<MainLayout />} >
    <Route path='/Restaurant-Management/' element={<HomePage />} />
    <Route path='/Restaurant-Management/team' element={<TeamView />} />
  </Route>)
)


const App = () => {
  return <RouterProvider router={ router} />
 
};
export default App;
