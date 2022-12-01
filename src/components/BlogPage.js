import React, { useEffect, useState } from 'react'
import styled ,{ ThemeProvider }from 'styled-components'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import { Atom } from './AllSvgs'
import BlogComponent from './BlogComponent'
import { motion } from 'framer-motion'
import { DarkTheme } from './Themes'
import Cursors from '../cursor/cursors'

const MainContainer = styled(motion.div)`
background-color: ${props => props.theme.body};
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`


const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

// const Grid = styled.div`
// display: grid;
// grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
// grid-gap: calc(1rem + 2vw);
// `
const Mail = styled.div`
    position:fixed;
    bottom:1rem;
    right:1rem;

`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])

    // cursor
    const [copyText,setCopy] = useState("nattanicha_up@hotmail.com");
    const handleCopy = ()=>{
        navigator.clipboard.writeText(copyText)
    }


    return (
        <ThemeProvider theme={DarkTheme}>
                    <Cursors></Cursors>
                    <MainContainer
                            variants={container}
                            initial='hidden'
                            animate='show'
                            exit={{
                                opacity:0, transition:{duration: 0.5}
                            }}
                            >
                                <Container>
                                    <PowerButton />
                                    <SocialIcons theme='dark'/>
                                    {/* <AnchorComponent number={numbers}/> */}
                    <Center>
                    <BlogComponent/>
                    </Center>

                    {/* <BigTitle text="About me" top="5rem" left="5rem" /> */}
                                </Container>
                                <Mail>
                                
                                <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            ><span  animate='show' style={{color:'#fff',fontSize:'0.5rem'}}>click icon to copy email</span>
            <Atom wight={80} height={80} fill='#fff' onClick={handleCopy} /></motion.div>
                                </Mail>
                    </MainContainer>
        </ThemeProvider>
        
    )
}

export default BlogPage
