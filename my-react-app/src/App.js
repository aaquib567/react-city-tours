import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.scss';
import TourList from './components/Tour/TourList'; 
import Tour from './components/Tour/Tour';

class App extends React.Component {
  render() {
    return(
    <main>  
        
        <Navbar/>
      
        <TourList/>
      
        
</main>
    );
}
}
export default App;
