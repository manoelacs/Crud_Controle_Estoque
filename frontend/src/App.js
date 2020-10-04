import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar/index';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar/>  
      <Home/>     
      <Footer/>  
    </div>
    
  );
}

export default App;
