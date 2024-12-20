import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import Navbar from './components/Navbar'; 
import Slider from './components/Slider';
import Card from './components/Card'
import Acessories from './components/Acessories'
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> 
    <Slider />
    <Card />
    <Acessories />
    <Footer />
  </StrictMode>
);
