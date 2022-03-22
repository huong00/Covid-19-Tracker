import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CovidVN from './components/Pages/CovidVietNam';
import Word from './components/Pages/CovidWord';
import NewsCovid from './components/Pages/NewsCovid';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import NavBar from './components/Nav/NavBar';
import ScrollToTop from './components/Nav/ScrollToTop';
import Footer from './components/Nav/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}/>
        <Route path='/' element={<NavBar />}>
          <Route path='/newscovid' element={<NewsCovid />}/>
          <Route path='/covidvn' element={<CovidVN />}/>
          <Route path='/covidword' element={<Word />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
    <ScrollToTop />
    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
