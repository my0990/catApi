import React, {useState} from 'react';
import styled from 'styled-components';
import './cat.css'
import theme from '../style/theme.js';
import ClickIcon from './clickIcon.js'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-size: 5em;
    display: flex;
    align-items: center;
    @media screen and (max-width: ${theme.mobile}) {
        height: 100vh;
        font-size: 2em;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1300px;
    height: 100%;
    background: skyblue;
    margin: 0 auto;
    @media screen and (max-width: ${theme.mobile}) {
        width: 100%;
        height: 80%;
    }
    cursor: pointer;
`

function Cat(){
    const [url,setUrl] = useState()
    const callApi = () => {
        fetch("https://api.thecatapi.com/v1/images/search").then(response => response.json()).then(data => setUrl(data[0].url) )
    }
    const [isClicked,setIsClicked] = useState(false)
    const btnClicked = () => {
        callApi();
        if(isClicked===false){
        setIsClicked(true)}
    }
    return(
        <Container>
            <Wrapper onClick={()=>{btnClicked()}}>
                {!isClicked
                ?<div>click
                <ClickIcon />
                </div>
            : null}
               
                <img src={url} />
            </Wrapper>
            
        </Container>
    )
}

export default Cat;
