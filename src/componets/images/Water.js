import { render } from '@testing-library/react';
import axios from 'axios';
import React, {Fragement,useState, useEffect} from 'react';
import { dataIndexOf } from 'react-widgets/cjs/Accessors';
import './data.css';
import styled, { css } from 'styled-components/macro';

const Divstyle = styled.div`
margin-left:1em;
font-family: "Gothic A1", sans-serif;
font-weight: 400;
font-size:2em;
sup{
   font-size: 1rem;
   top: -1em;
   line-height: 0.9em;
   position: relative;
   vertical-align: baseline;
   margin-right:1em;
   margin-left:1em;
}
`;

var counter=0;

function Water(){
     
     
   useEffect(()=>{
      getWater();
   },[]);
   
   const [waterList, setwaterList] = useState([]);
   const [loading,setLoading] = useState(false);
   
   const getWater = async()=>{
      try {
         setInterval(() => {
            axios.get('http://localhost:3001/waterLevel').then((response)=>{
               setwaterList(response.data);
               setLoading(true);
         },1000).catch(function (error){console.log(error)})});
      }catch(err){
         alert(err.message);
      }
   }
      return (<>
         {loading && waterList.map((datas)=>(
              <Divstyle key={datas.id}>{datas.river_water_level}<sup>FT IN</sup></Divstyle>
         ))}
     </>);
}
export default Water

