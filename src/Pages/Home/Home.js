

import React, { useEffect, useState } from 'react';
import './Home.css';
import {banners} from "../../data";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";


const Home = () => {
  var arrs=["banner1","banner2","banner3","banner4","banner5","banner6","banner6","banner7","banner8"];
 
  var [count,setCount]=useState(0);
  const next=()=>{

    
    if(count === arrs.length-1){
      count=-1;
      setCount(0);
    }
    else{
      setCount(count+1);
    }
    
    
    
    
  }
  const prev=()=>{
    if(count==0){
      count=arrs.length-1;
      setCount(count);
    }
    else{
      setCount(count-1);
    }
    
    
    
    
  }
  useEffect(() => {
    const interval = setInterval(next, 5000); 
    return () => clearInterval(interval); 
  }, [count]);

  // setInterval(next,5000);
  return (
    <div className='home'>
      <div className='banner'>
        <div className='banner-container'>
          <img id="imgg" src={banners[arrs[count]]}/>
<div className='banner-arrow'>
  <div onClick={prev}><SlArrowLeft/></div>
  <div onClick={next}>< SlArrowRight/></div>
 
</div>
        </div>

        </div>
        
        
    </div>
  )
}

export default Home;