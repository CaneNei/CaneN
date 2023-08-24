import React, { useState } from 'react';
import '../styles/Resume.css';
import Button from 'react-bootstrap/esm/Button';
import resumeIcon from '../images/resume-icon.png';
import caneResume from '../images/Cane Resume.pdf';
import Gmail from '../images/icons8-gmail-48.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Resume() {
  const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

  return (
    <div className='box' id = 'Resume'><br></br>
        <div className ='res-container'>
          <div className='secondbox'>
            <h1>RESUME</h1>           
            <a href={caneResume} target='_blank' rel='noreferrer'>
              <img src={resumeIcon} alt='' className='icon'/>
            </a>
          </div><br></br>
          <div className='secondbox'>
            <h1 className='text1'>Contact Me</h1>
            <div className='contact'>
              <a href='https://www.linkedin.com/in/cane-neilson-97283a212/' target='_blank' rel='noreferrer'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className='resicon'/>
              </a>
              <a>
              <CopyToClipboard text='caneneil24@gmail.com' onCopy={handleCopy}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' className='resicon'/>
              </CopyToClipboard>   
              {isCopied && <div className='popup'>Copied!</div>}           
              </a>
            </div>
          </div><br></br>
        </div>
    </div>
  )
}

export default Resume