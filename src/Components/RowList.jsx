import React,{useState,useEffect} from 'react';
import sample from '../assets/ekZobS8isE6mA53RAiGDG93hBxL.webp'
const RowList = () => {
  const [movies,setMovies]=useState({})
  useEffect(()=>{
    fetch("")
    .then()

  },[])
  return (
    <div className='image-wrapper'>
      <img src={sample} alt="" />
    </div>
  );
}

export default RowList;
