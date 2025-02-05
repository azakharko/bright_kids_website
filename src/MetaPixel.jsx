/* global fbq */

import { useEffect } from "react";



const MetaPixel = () => {
  useEffect(() => {
  
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.fbq) {
        fbq('init', '2329170794133425');
        fbq('track', 'PageView');
      }
    };
  }, []);

  return null;
};

export default MetaPixel;
