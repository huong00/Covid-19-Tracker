import React, { useEffect, useState } from 'react'; 
import NavBar from './components/Nav/NavBar';
import NewsHome from './components/Pages/NewsHome';

function App(props) {
 
  return (
    <div className='container-fluid'>
      <NavBar />  
      <NewsHome/>

    </div>
  );
}

export default App;