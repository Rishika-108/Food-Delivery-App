import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import  {Routes, Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://food-delivery-app-backend-4k2b.onrender.com";
  return (
    <div>
        <ToastContainer/>
       <Navbar/>
       <hr />
       <div className="app-content">
         <Sidebar/>
          <Routes>
             <Route path = '/add' element= {<Add url={url}/>}/>
             <Route path = '/list' element=  {<List url={url}/>}/>
             <Route path = '/orders' element= {<Order url={url}/>}/>
          </Routes>
       </div>
    </div>
  )
}

export default App
