
import React from "react";
import styled from "styled-components";

const Text = styled.div`
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
    font-size: calc(0.1rem + 1vw);
    font-weight:300;
 @media (max-width:600px){
        margin-top: 10rem;
        font-size: calc(3px + 0.5vw);
`

export const Headintro = () => {
    return (
        <Text>
            <h1>Hello Atom Wolrd.I'm </h1>
            <h1>found of Designing + Developing.</h1>
        </Text>
        
        );
}