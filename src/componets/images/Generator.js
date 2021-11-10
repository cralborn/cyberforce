
import axios from 'axios';
import React, {Fragement,useState, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';

const Divstyle = styled.div`
margin-left: 1em;
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


function Generator(){
     
     
   useEffect( () => {
      getGene();
   },[]);
   
   const [geneList, setgeneList] = useState([]);
   const [loading, setLoading] = useState(false);
   const getGene = async()=>{
      try {
         setInterval(() => {
            axios.get('http://localhost:3001/Generator').then((response)=>{
               setgeneList(response.data);
               setLoading(true);
            },1000).catch(function (error){console.log(error)})});
         
      }catch(err){
         alert(err.message);
      }
   };
 
      return (<>
         {loading && geneList.map((gene)=>(

                 <Divstyle key={gene.id}>{gene.generator_number}<sup>UNIT</sup></Divstyle>
         ))}
     </>);
}

export default Generator