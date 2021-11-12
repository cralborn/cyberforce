import React from 'react';
import { Button1 } from './Button1';
import { Button2 } from './Button2';
import './HeroSection.css';
import '../App.scss';
import './Button.css';

function HeroSection(){
    return(
        <div className='hero-container'>
            <video src="damVideo.mp4" autoPlay loop muted/>
            <h1> Kuma Lake Dam</h1>
            <div className="hero-btns">
                <Button1 className='btn' buttonStyle='btn--outline'
                buttonSize='btn--large' onClick={event =>  window.location.href='/OurLakesDams'}>Our Lakes & Dams</Button1>
                  <Button2 className='btn' buttonStyle='btn--outline'
                buttonSize='btn--large' onClick={event =>  window.location.href='/Recreation'}>Recreation</Button2>
            </div>
        </div>
    );
}

export default HeroSection