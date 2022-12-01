import { motion } from 'framer-motion'
import React, { useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import SocialIcons from '../subComponents/SocialIcons'
import { Atom} from './AllSvgs'
import Intro from './Intro'
// import CURSOR

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Overpass', sans-serif ;
  font-weight:700;
  font-size:1rem;
}
`

const Container = styled.div`
padding: 2rem;

`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 3.5rem;
left: calc(1rem + 2vw);
// transform: translate(-50%, -50%) ;
z-index:1;
&:hover{
    text-decoration:none;
    color: ${props => props.click ? props.theme.body : props.theme.text};
}

`


const ABOUT = styled(NavLink)`
color: ${props =>props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 3.5rem;
right: calc(1rem + 2vw);
// transform: rotate(90deg) translate(-50%, -50%);
transform: translate(-50%, -50%);
text-decoration: none;
z-index:1;
&:hover{
    text-decoration:none;
    color: ${props => props.click ? props.theme.body : props.theme.text};

}
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 10s linear;
    fill:${props =>props.click ? '#fff' :props.theme.text };
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
// right: 50%;
width: ${props => props.click ? '100%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
// z-index:1;
transition: height 0.5s ease;
`
const CursorClass = styled(motion.div)`
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

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // ===cursor
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
        opacity:0.5,
        
      },
      text:{
        height: 16,
        width: 16,
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        opacity:1,
        backgroundColor: "blue",
        // mixBlendMode: "difference"
      },
 
    }
    // สร้างตัวแปรเพื่อจะเก็บค่าให้เปลี่ยนสีเมื่อเม้าชี้6x จะมาเก็บค่าของตัวแปรtextแทน ตัวแปรdefault
    const textEnter = ()=>setCursorVariant("text")
    const textLeave =()=>setCursorVariant("default")
    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            {/* <PowerButton /> */}
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            <Center click={click} >
                <Atom  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor'  />
                <span >click my face</span>
            </Center>
             
            <ABOUT to="/about" click={+click} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <motion.h3
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    info
                </motion.h3>
            </ABOUT>
         
            <WORK to="/work" click={+click} onMouseEnter={textEnter} onMouseLeave={textLeave}>
             <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}

                >
                    work
                </motion.h2>
            </WORK>
            {click ? <Intro click={click} /> : null }
               
            </Container>
            <CursorClass
        className='cursor'
        variants={variants}
        // animate="default"
        animate={cursorVariant}//8x
      />
        </MainContainer>
    )
}

export default Main
