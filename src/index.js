import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./routes/login"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<App/>} />
   <Route path='login' element={<Login/>} />
   {/* <Route path='/' element={<App/>} /> */}
   </Routes>
  </BrowserRouter>
);

