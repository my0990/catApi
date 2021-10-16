import React from 'react'
import {animated, useSpring} from 'react-spring'
import styled from 'styled-components'
import theme from '../style/theme.js';
import iconImg from '../img/paw.png';

const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    font-size: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${theme.mobile}) {
        width: 100px;
        height: 100px;
    }
    overflow: visible;
    
`

const Icon = styled(animated.div)`
    width: 200px;
    height:200px;
    display: block;
    background: url(${iconImg});
    background-size: cover;
    
    @media screen and (max-width: ${theme.mobile}) {
        width: 50px;
        height: 50px;
    }
`

function ClickIcon() {
    const props = useSpring({
        from: {y: 30},
        to: {y: 0},
        loop: true,
        delay: 1000
    })
    return(
        <div>
            <Wrapper>
                <Icon style={props}/>
            </Wrapper>
        </div>
    )
}

export default ClickIcon