import React from 'react'
import styled from 'styled-components'


// styled
const BoxBox =styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    margin: 0;
    @media (max-width:600px){
        grid-template-columns: repeat(2,auto);
        
    }
`;

const Bgtext =styled.p`
 color: #101010;
  font-family:'Anton', sans-serif ;
  top:50%;
  font-weight:500;
  line-height: 1rem;
  letter-spacing:-15px;
//   background-color:green;

  font-size: 20rem;
  @media (max-width:600px){
    // background-color:blue;
    margin-top: 10rem;
    font-size: 10rem;
    
}
`
export const BigTitlteIntro = () => {
  return (
    <BoxBox>
        <Bgtext>A</Bgtext>
        <Bgtext>T</Bgtext>
        <Bgtext>O</Bgtext>
        <Bgtext>M</Bgtext>
    </BoxBox>
    )
}
