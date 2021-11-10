import React from 'react';
import '../../App.scss';
import { SliderData } from '../data/SliderData';
import HeroSection from '../HeroSection';
import Lakes from '../Lakes';

function Home(){
    return(
        <>
        <HeroSection />
        <Lakes slides={SliderData}/>
        </>
    );
}
export default Home