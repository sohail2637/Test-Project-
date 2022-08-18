import React from 'react';
import {BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import NaveBar from './component/NaveBar';
import Dashboard from './component/Dashboard';
import Related from './component/Related';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NaveBar/>
      <Routes>
        <Route path="/login" element={<Login/> } />
        <Route path="/" element={<Dashboard/> } />
        {/* <Route path="/related" element={<Related />} /> */}
      </Routes>
      </BrowserRouter>
 </div>
  );
}

export default App;
