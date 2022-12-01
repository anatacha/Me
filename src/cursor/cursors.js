
// import './App.css';
// import { BrowserRouter, NavLink ,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import Home from './components/page/home.js';
// import Footer from './components/footer/footer';


const CursorStyle =styled(motion.div)`
background-color: rgba(13,0,255);
height: 64px;
width: 64px;
border-radius: 50%;
position: fixed;
top: 0;
left: 0;
pointer-events: none;
opacity: 1.5;
animation: colors 5000s infinite;
// transform: translate(-50%, -50%);
z-index: 999;
mix-blend-mode: darken;
`

function Cursors() 
  {
  //1xใช้UseState เพื่อรับค่าที่เปลี่ยนแปลงของตน.เมาส์ แต่ ตอนเริ่มต้นให้ตน.xyเป็น0 ก่อน
  const [mousePosition,setMousePosition]=useState({x:0,y:0});
  console.log(mousePosition);
  //5x useState ตอนแรกให้ใช้ค่าเริ่มต้นเป็นค่าของตัวแปรdefaultก่อน
  const [cursorVariant,setCursorVariant]=useState("default");
  
  // ========== useEffect ==========
  useEffect(()=>{
    
    // 3xสร้างตัวแปร mouseMove เก็บค่าตน.ปัจจุบันได้จากclient ดูจากการconsoleของเมาส์ส่งไปไว้ที่useState ของ setMousePosition
    const mouseMove = (e) =>{
      // console.log(e);
      setMousePosition({
        x:e.clientX,
        y:e.clientY

      })
    }
    // 2xดักจับโดยเมื่อถ้าเข้ามาในหน้านี้ครั้งแรกและเมื่อเมาส์เคลื่อนไหวจะเรียกใช้ฟังก์ชันmousemove
    window.addEventListener("mousemove",mouseMove);
    return () =>{
      window.removeEventListener("mousemove",mouseMove)//4xลบค่ากลับไปตั้งต้น
    }
  },[])

  //สร้างเป็นobject
  const variants ={
    // สร้างตัวแปรเป็นค่าdefault
    default:{
      // ตน.ของเมาส์
      x:mousePosition.x-32, //เข้าถึงค่าx:0
      y:mousePosition.y-32, //เข้าถึงค่า:0
      
    }
    // ,
    // text:{
    //   height: 32,
    //   width: 32,
    //   x: mousePosition.x - 16,
    //   y: mousePosition.y - 16,
    //   opacity:1,
    //   backgroundColor: "blue",
    //   // mixBlendMode: "difference"
    // },
    // logo:{
    //   height: 16,
    //   width: 16,
    //   x: mousePosition.x - 8,
    //   y: mousePosition.y - 8,
    //   opacity:1,
    //   backgroundColor: "blue",
    // }
  }
  // สร้างตัวแปรเพื่อจะเก็บค่าให้เปลี่ยนสีเมื่อเม้าชี้6x จะมาเก็บค่าของตัวแปรtextแทน ตัวแปรdefault
  // const textEnter = ()=>setCursorVariant("text")
  // const textEnterLogo = ()=>setCursorVariant("logo")
  // const textLeave =()=>setCursorVariant("default")
  // =====ลอง
  return (
    // 7x เอาตัวแปรที่สร้างมาใช้
    <>

      <CursorStyle
        className='cursor'
        variants={variants}
        // animate="default"
        animate={cursorVariant}//8x
      />

    </>
  );
}

export default Cursors;
