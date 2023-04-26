import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Service from './routes/ServicePage';
import Recovery from './routes/RecoveryPage';
import Contact from './routes/ContactPage';


import {BrowserRouter, Routes ,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/service' element={<Service/>} />
    <Route path='/recovery' element={<Recovery/>} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
  </BrowserRouter>
);

