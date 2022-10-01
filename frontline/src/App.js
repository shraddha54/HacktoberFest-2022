import React from 'react';
import "./App.css"
import Login from './Component/Login';
import Signup from './Component/Signup';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import GPSsummary from './Component/GPSsummary';

function App() {
  return (
    <div className='pagebody'>
       <Routes>
       <Route path="/signup" element={<Signup />} />
       <Route path="/" element={ <Login />} />
       <Route path="/user/gps" element={<GPSsummary />} />
       </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
