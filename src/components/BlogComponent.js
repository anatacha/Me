import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Cursors from '../cursor/cursors'




const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: calc(1rem + 2vw);
margin:0 10rem;
width: 100%;


    @media (max-width:600px){
        // background:red;
        grid-template-columns: auto;
        // font-size: calc(3px + 0.5vw);
    }
`
// =====Container
const Container = styled(motion.div)`
width: 100%;
height:auto;

h2,h3,h4,h5,h6,p{
    color:${props=> props.theme.text};
    font-size:1rem;
}


`

// HEADS
const HEADS = styled.div`
    font-size:3rem;
    margin:0;
    font-weight:700;
    font-size:3rem;
    color:${props=> props.theme.body};
    -webkit-text-stroke: 0.5px #fff;
   
`
const SECTION = styled.div`
    color:${props=> props.theme.text};
    // border:1px solid green;
    
`
const SUBSECTION = styled.span`
    // border:1px solid green;
    display:flex;
    flex-direction:column;
    margin:0;
    pading;0;
    top:0;
    color:${props=> props.theme.text};
`


const BlogComponent = (props) => {
    // const {name, tags, date, imgSrc, link} = props.blog;
    return (

        <Grid>
            <Cursors></Cursors>
         <Container>
            <HEADS>
               <h1>Skill</h1> 
            </HEADS>
            <SECTION>
                <p>Front-end</p>
                <SUBSECTION>
                    <span>1xHtml</span>
                    <span>2xCss</span>
                </SUBSECTION>
                    <br/>

                <p>Back-end</p>
                <SUBSECTION>
                    <span>xJavascript</span>
                </SUBSECTION>
                <br/>
        
                <p>Frame work</p>
                <SUBSECTION>
                    <span>1xBootstra</span>
                    <span>2xLaravel</span>
                </SUBSECTION>
                <br/>
        
                    <p>Libraries</p>
                <SUBSECTION>
                    <span>xReact</span>
                </SUBSECTION>
                <br/>

                <p>Another</p>
                <SUBSECTION>
                    <span>xgit</span>
                </SUBSECTION>
                <br/>
                <p>Graphic</p>
                <SUBSECTION>
                    <span>1xPhotoshop</span>
                    <span>2xBasic Premiere pro</span>
                </SUBSECTION>
            </SECTION>
        </Container>
        <Container>
            <HEADS >
               <h1>Profile</h1> 
            </HEADS>
            <SECTION>
                <p>Bachelor's degree at The Faculty of Humanities, Major in Information Sciences, studies a minor in Computer Science Chiang Mai University.<br/></p>
                <p>I'm love to learn in system development to support stable work Likes to learn new things for the ability to work in dealing with information along with the use of technology.</p>
                <p>This is a challenge and requires us to learn all the time because technology and information are endless.</p>
            </SECTION>
        </Container>
        
        <Container>
        <HEADS>
               <h1>Soft skill</h1> 
            </HEADS>
            <SECTION>
            <SUBSECTION>
                <span>Front-end</span>
                <span>1xEnthusiastic to gather new knowledge</span>
                <span>2xWorks well with others</span>
                <span>3xPunctual</span>
            </SUBSECTION>
            </SECTION>
        </Container>
        <Container>
            <HEADS>
               <h1>Contact</h1> 
            </HEADS>
            <SECTION>
            <SUBSECTION>

                <span>1xMobile Number: 0918517364</span>
                <span>2xEmail: nattanicha_up@hotmail.com</span>
                </SUBSECTION>

            </SECTION>
        </Container>
        <Container>
            <HEADS>
               <h1>Experience</h1> 
            </HEADS>
            <SECTION>
                <p>Internship at position Developer 4 month 
at IMAZMAKER CO., LTD. (Head Office)</p>
            </SECTION>
        </Container>
        
        </Grid>

       
    )
}

export default BlogComponent
