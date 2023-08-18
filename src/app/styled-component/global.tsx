'use client'
import { createGlobalStyle } from "styled-components";


const Globals = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;


    }

    body {
        background-color: #252525;
    }
`

export const GlobalStyle = () => {
    return <Globals />
}