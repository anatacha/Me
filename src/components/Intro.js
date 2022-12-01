import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {BigTitlteIntro} from '../subComponents/BigTitlteIntro'
import SubIntro from './Subintro'


const Box = styled(motion.div)`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content:center;
    align-items:center;
    width: 65vw;
    height:55vh;
    display: flex;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    z-index:1;

`

const Intro = () => {
    return (
        <Box>
            <SubIntro>
                <BigTitlteIntro/>
            </SubIntro>
        </Box>
           

    )
}

export default Intro
