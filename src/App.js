import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [scale, setscale] = useState(false)
  const [isMouseConnected, setIsMouseConnected] = useState(true);
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });

    document.querySelectorAll('.hover-scale').forEach(elem => {
      elem.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-effect');
      });
      elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-effect');
      });
    });
  }, []);

  function handleMouseMove(e) {
    var pointer = document.getElementById("crclebx"),
      pointerBox = pointer.getBoundingClientRect(),
      centerPoint = window.getComputedStyle(pointer).transformOrigin,
      centers = centerPoint.split(" "),
      centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
      centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset;
    var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    pointer.style.transform = "rotate(" + degree + "deg)";
    if (scale) {
      pointer.style.transform = "rotate(" + degree + "deg) scale(1.1)";
    }
    else {
      pointer.style.transform = "rotate(" + degree + "deg) scale(1)";
    }
  }
  window.addEventListener("mousemove", handleMouseMove);

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="main-title">
      <span>UTC</span>
        <img src='./asset-stars.svg' alt='star' className='logo' />
        <span>RECORDS</span>
      </div>
      <div className='emailbox'>
        <a href='mailto:hello@utcrecords.com'
          className="email hover-scale"
        >
          AROUND THE CLOCK - ACROSS THE GLOBE
          AROUND THE CLOCK - ACROSS THE GLOBE
          AROUND THE CLOCK - ACROSS THE GLOBE
          AROUND THE CLOCK - ACROSS THE GLOBE


        </a>
      </div>
      <a href='mailto:hello@utcrecords.com' className='circlebox' id='crclebx' onMouseOver={() => { setscale(true) }} onMouseOut={() => { setscale(false) }}>
        <img src="./images/get_in_touch.svg" className='get_text' />
        <img src="./images/music_icon.svg" className='music-icon' />
      </a>

      {/* Conditionally render the about link */}
      {
        !isPopupVisible && (
          <div className="about hover-scale"
            onClick={() => setPopupVisible(true)}
          >
            about
          </div>
        )
      }

      {/* The popup */}
      <div className={`footer-popup ${isPopupVisible ? 'active' : ''}`}>
        <div className="close-popup" onClick={() => setPopupVisible(false)}>X</div>
        <p><b>UTC RECORDS</b> is a global record label and distribution company for artists who don’t follow the rules—they redefine what lasts.
        <br /><br />

We’re not here for one-hit wonders or viral moments. We’re building with artists whose music leaves a mark—songs so powerful they don’t just chart, they live in people’s memories. The kind of music that, 20 years from now, instantly pulls you back to the exact feeling, place, and moment you first heard it. That’s impact. That’s legacy.
<br /><br />
We don’t care about genres. We don’t care about language. If your music moves people—really moves them—we’re listening.
<br /><br />
If you’re building something that cuts through the noise and stands the test of time, we want to build it with you.</p>
      </div>
    </div >
  );
}

export default App;
