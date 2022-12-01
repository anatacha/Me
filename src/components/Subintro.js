import React from 'react'
import styled from 'styled-components'
import { Headintro } from '../subComponents/Headintro'



// ====try
const ImageBox = styled.div`
width: 50vw;
height: 50vh;
overflow: hidden;
margin:0 auto;
padding: 0;
color:#fff;
justify-content:center;
align-items:center;
position: absolute;
// background-color:red;

`
const ImageBg =styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-height: 960px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
padding: 20px;
position: fixed !important;
}
`
// ImageContent
const ImageContent = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const SubIntro = ({

    children,

}) => {
    
    return (
            <ImageBox>
                   <ImageBg>{children}</ImageBg>

                <ImageContent>
                    <Headintro></Headintro>
                </ImageContent>
            
            </ImageBox>

    )
}

export default SubIntro
