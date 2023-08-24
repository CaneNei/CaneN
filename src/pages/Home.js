import React, { useRef, useEffect} from 'react'
import '../styles/App.css';
import GifDisp from '../components/GifDisp';
import ProjectDisp from '../components/ProjectDisp';
import Resume from '../components/Resume';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

function Home() {  
  return (        
    <div>
      {/* <Header/> */}
      <GifDisp />
      <div id='Projects'>
      <ProjectDisp /></div>
      <div className='App'>
        <Resume />
      </div>      
    </div>    
  )
  
}



// const Home = () => {
//   const aboutSectionRef = useRef(null);
//   const projectsSectionRef = useRef(null);
//   const resumeSectionRef = useRef(null);

//   const scrollFunction = scrollToSection(aboutSectionRef, projectsSectionRef, resumeSectionRef);

//   useEffect(() => {
//     // Expose scrollToSection to the global scope
//     window.scrollToSection = scrollFunction;
//   }, [])

//   return (
//     <div>
//       <Header scrollToSection={scrollToSection} />
//       <div ref={aboutSectionRef} id="Home">
//         {<GifDisp/>}
//       </div>
//       <div ref={projectsSectionRef} id="Projects">
//         {<ProjectDisp />}
//       </div>
//       <div ref={resumeSectionRef} id="Resume">
//         {<Resume />}
//       </div>
//       {/* Other content */}
//     </div>
//   );
// }

export default Home