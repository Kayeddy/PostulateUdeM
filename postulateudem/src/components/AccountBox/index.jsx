import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
width: 260px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #ffa;
box-shadow: 0px 0px 5px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8rem;
padding-bottom: 5em;
`;

const BackDrop = styled.div`
width: 160%;
height: 540px;
top: -290px;
left: -70px;
transform: rotate(60deg);
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
background: rgb(241, 196, 15);
background: linear-gradient(
    58deg, 
    rgba(241, 196, 15, 1),
    rbga(243, 172, 18, 1)
);
`;

export function AccountBox(props)
{
    return <BoxContainer>
                <TopContainer>
                    <BackDrop/>
                </TopContainer>
            </BoxContainer>
}