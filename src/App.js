import React from 'react';
import TableEmployee from './pages/commands/components/TableEmployee';
import { Route,Routes } from 'react-router-dom';
import EmployeeService from './pages/commands/service/EmployeeService';
import MainLayout from './pages/layout/container/MainLayout';

import MenusContainer from "./pages/menus/container/MenusContainer"
import Commands from './pages/commands/containers/Commands';
import ScanTable from './pages/tableManager/container/ScanTable';
import LoginContainer from './pages/login/container/LoginContainer';
import MenuAdmin from './pages/menus/container/MenuAdmin';



function App() {
 
  return (
    <Routes>
      <Route
          path='/' 
          element={<MainLayout/>}
      >
        <Route path='/' element={<MenusContainer/>}/>
        
        <Route path='employee' element={ <TableEmployee/>}/>
        <Route path='command' element={<Commands/>}/>
        <Route path='scantable' element={<ScanTable/>}/>
        <Route path='login' element={<LoginContainer/>}/>
        <Route path='menu-admin' element={<MenuAdmin/>}/>
      </Route>
        <Route path='service' element={<EmployeeService/>}/>
    </Routes>
  );
}

export default App;
