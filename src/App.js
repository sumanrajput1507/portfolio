import './App.css';
import React from 'react';
import Header from './Components/Header';
import Profile from './Components/Profile';
import About from './Components/About';
 
const App = () => {
  return (
    <>
    <div className='container'>
      <Header />
      <Profile />
      <About />
      </div>
      </>
  )
}
 


export default App;
