import React from 'react';
import TableEmployee from './pages/commands/components/TableEmployee';
import { Route,Routes } from 'react-router-dom';
import EmployeeService from './pages/commands/service/EmployeeService';
import MainLayout from './pages/layout/container/MainLayout';

import MenusContainer from "./pages/menus/container/MenusContainer"

// const Menu = React.lazy(()=>import('./pages/menus/container/MenusContainer'))

function App() {
 
  return (
    <Routes>
      <Route 
          path='/' 
          element={<MainLayout/>}
      >
        <Route path='menu' element={<MenusContainer/>}/>
        
        <Route path='employee' element={ <TableEmployee/>}/>
      </Route>
          
      
        
        <Route path='service' element={<EmployeeService/>}/>
    </Routes>
  );
}

export default App;
