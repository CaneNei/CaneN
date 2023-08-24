import './styles/App.css';
import React, { useCallback } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import GifDisp from './components/GifDisp';
import ProjectDisp from './components/ProjectDisp';
import Resume from './components/Resume';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  // const App = () => {
  //   const handleAnchorLinkClick = useCallback((sectionId) => {
  //     const sectionElement = document.getElementById(sectionId);
  //     if (sectionElement) {
  //       sectionElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, []);

  return (
    <div>  
     <Router>
      <ScrollToAnchor />
      <Header />      
      {/* <Header handleAnchorLinkClick={handleAnchorLinkClick} /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Projects />} />
        </Routes>               
        <Footer />
      </Router>    
    </div>
  );  
}

export default App;
