import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

function Landing(props) {
  const landingButton = {
    display: 'block',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #ffffff',
    margin: '150px auto',
    width: '150px'
  }

  return(
    <div className="landing-img">
      <h1 className="landing-title">NATURE'D</h1>
      <Typed strings={[`If you're not living on the edge you're taking up too much space`]} typeSpeed={40} className="landing-text"></Typed>
      <Link to="/categories">
        <button style={landingButton}>Enter</button>
      </Link>
    </div>
  )
}

export default Landing;
