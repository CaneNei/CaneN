import { useLocation } from 'react-router-dom'
import React, { useRef, useEffect} from 'react'

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  