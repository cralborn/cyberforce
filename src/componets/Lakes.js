import React, {useEffect,useState,useRef} from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import {IoArrowForward,IoArrowBack } from 'react-icons/io5';

const LakesSection= styled.section`
height: 100vh;
max-height: 1100px;
position: sticky;
overflow: hidden;
`;

const LakesWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const LakeSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const LakeSlider = styled.div`
position: absolute;
top: 0; 
left: 0; 
width: 60%; 
height: 100%; 
display: flex; 
align-items: center; 
justify-content: center; 
&::before{
    content: '';
    position: absolute; 
    z-index: 2;
    width: 100%;
    height: 100%; 
    bottom: 0vh; 
    left: 0; 
    overflow: hidden; 
    opacity: 0.4; 
    background: linear-gradient(0deg,rgba(0,0,0,0.2) 0%,0deg,rgba(0,0,0,0.2) 50%,0deg,rgba(0,0,0,0.6) 100%);
}`;

const LakeImage = styled.img`
position: absolute; 
top: 0; 
left:0; 
width: 100vw; 
height: 100vh; 
object-fit: cover;
`;

const LakeContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100%-100px);
color: #fff;

h1{
    font-family: 'Great Vibes',sans-serif;
    font-size: clamp(1rem,8vw,4rem);
    font-weight: 400;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin:bottom: 0.8rem;
    text-shadow: 0px 1px 3px rgba(0,0,0,0.6);
}
p{
    font-size: 1em;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
ul{
    list-style: none;
}
li{
    float: left;
    margin: 0 22px 0 0;
    margin-bottom: 1em;
}
h5{
    margin-left: 1em;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 2em;
}
h4{
  margin-right: 1em;
  margin-bottom: 1em; 
  margin-left: 1em;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
text-transform: uppercase;
}
sup{
    font-size: 1rem;
    top: -1em;
    line-height: 0.9em;
    position: relative;
    vertical-align: baseline;
    margin-right:1em;
}
`;

const arrowButtons= css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover{
    background: #cd853f;
    transform: scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const SliderButtons=styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;



const Lakes = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);


    useEffect(() => {
        const nextSlide = () =>{
            setCurrent(current => (current === length-1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide,360000);

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        };
    }, [current,length]);

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current === length -1 ? 0 : current + 1);

        //console.log(current);
    };

    const prevSlide = () =>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1: current - 1);

        //console.log(current);
    }
    
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return(
        <LakesSection>
            <LakesWrapper> 
                {slides.map((slide, index) => {
                    return(
                        <LakeSlide key={index}>
                            {index === current && ( <LakeSlider>
                                                        <LakeImage src={slide.image} alt={slide.alt}/>
                                                            <LakeContent>
                                                                <h1>{slide.title}</h1>
                                                                <ul>
                                                                    <li css={`border-right: 1px solid white;`}>
                                                                        <h4>Water Level</h4> 
                                                                        {slide.Water_Level}
                                                                    </li>
                                                                    <li css={`border-right: 1px solid white;`}>
                                                                        <h4>Generators</h4> 
                                                                        {slide.Generators}
                                                                    </li>
                                                                    <li>
                                                                        <h4>Generation Outflow</h4> 
                                                                        {slide.Generation_Outflow}
                                                                    </li>                                          
                                                                </ul>
                                                            <Button to={slide.path} primary="true" css={`max-width:160px;align:center;`} 
                                                                className='btns' buttonStyle='btn-primary' buttonSize='btn--large'>
                                                                    {slide.label}
                                                            </Button>
                                                        </LakeContent>                                   
                                                    </LakeSlider>)}
                        </LakeSlide>
                    );
                }
                )};
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </LakesWrapper>
        </LakesSection>
           
    );
}

export default Lakes