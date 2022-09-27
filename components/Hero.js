import React, { useEffect } from 'react'
import { useRef } from 'react';
import {Cursor , useTypewriter} from "react-simple-typewriter"
import Curicle from './Curicle';
function Hero() {
  const text1  = useRef()
  const cursor1 = useRef()
  
  useEffect(()=>{
    setTimeout(()=>{
      text1.current.style.display ="inline"
      cursor1.current.style.display="inline"
    },2000)
  },[])
    const [text , count] = useTypewriter({
        words: [
            "Ibrahim karim",
            "Front End Dev",
            
        ],
        loop:true , 
        delaySpeed:1500 ,
    }) 
  return (
    <div className='h-screen flex flex-col  space-y-8 items-center justify-center text-center overflow-hidden'>
        <Curicle />
        <img src="/images.png" alt='image-portfolio' title='image-portfolio'
        className='relative h-36 w-36 rounded-full mx-auto  object-fill' />
       <div className="z-20">
        <h1 className='text-md uppercase pb-2 text-gray-500 tracking-[25px] font-bold'>Software </h1>
        <p className='text-4xl lg:text-5xl font-semibold px-10'>
           <span className='mr-3 hidden' ref={text1}>{text}</span>
        <span className="hidden" ref={cursor1}><Cursor cursorColor='black'  /></span>
        </p>
       </div>
  
    </div>
  )
}

export default Hero