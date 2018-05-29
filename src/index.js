import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'

const Div = styled('div')`
    background: black;
    color: red;
    text-decoration: underline;
`

const Index = () => <Div> React! </Div>

ReactDOM.render( <Index /> , document.getElementById("index-id"))