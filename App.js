import logo from './logo.svg';
import './App.css';
import './App1.css';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import User from './User';
import "./font/fontawesome-free/css/all.min.css";
import Overview from './Overview';
import Createuser from './Createuser';



function App() {
  const[count,setcounter]=useState(0)
  return (

    <BrowserRouter>
        <div id="wrapper">

         <Sidebar/> 
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content"> <Topbar/>
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path='/user' element={<User/>}></Route>
  <Route path='createuser' element={<Createuser/>}></Route>
</Routes>
           </div>
          </div>
       </div>
</BrowserRouter>
  );
}

export default App;
