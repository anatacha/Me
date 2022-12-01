import React from 'react'
import styled from 'styled-components'
const AlertMail = styled.div`
    position:fixed;
    bottom:1rem;
    right:1rem;
    color:#fff;

`

export const alert = (props) => {
  return (
    <AlertMail>copied{props.text}</AlertMail>
  )
}
