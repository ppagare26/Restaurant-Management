import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} 
from 'react-router-dom'
import Modal from 'react-modal';
import 'chart.js/auto'; // This ensures all necessary components are registered
import MainLayout from './layouts/MainLayout';
import HomePage from './screens/HomePage';
import TeamView from './screens/TeamView';
import AddTeamMember from './screens/AddTeamMember';
import EditMember from './screens/EditMember';
const basename = '/Restaurant-Management';

const router = createBrowserRouter(
  
  createRoutesFromElements(
  <Route path='/Restaurant-Management/' element={<MainLayout />} >
    <Route path='/Restaurant-Management/' element={<HomePage />} />
    <Route path='/Restaurant-Management/team' element={<TeamView />} />
    <Route path='/Restaurant-Management/add-member' element={<AddTeamMember />} />
    <Route path='/Restaurant-Management/edit-member/:memberId' element={<EditMember />} />
  </Route>)
)

Modal.setAppElement('#root'); 
const App = () => {
  return <RouterProvider router={ router} />
 
};
export default App;
