import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: relative;
display:flex;
justify-content:center;
align-items:center;
margin 0 auto;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(5rem + 5vw);
z-index:0;

`


const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
