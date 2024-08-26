
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import AddEmployee from './Components/AddEmployee';
import DeleteEmployee from './Components/DeleteEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import GetEmployee from './Components/GetEmployee';
import LandingPage from './Components/LandingPage';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import './App.css';
import Features from './Components/Features'; 

const NavigationWrapper = () => {
  const location = useLocation();
  const shouldShowNav = ["/add", "/delete", "/update", "/get"].includes(location.pathname);

  return shouldShowNav ? <Navigation /> : null;
};

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationWrapper />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} /> 
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
        <Route path="/get" element={<GetEmployee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
