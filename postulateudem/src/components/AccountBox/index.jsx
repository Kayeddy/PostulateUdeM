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
padding: 0 1.8rem;
padding-top: 100px;
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

const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const HeaderText = styled.h2`
font-size: 40px;
font-weight: 600;
line-height: 1.24;
margin: 0;
color: #fff;
z-index: 10;
`;

const SubheaderText = styled.h2`
font-size: 15px;
font-weight: 550;
line-height: 1.24;
margin: 0;
padding-top: 5px;
color: #fff;
z-index: 10;
`;

export function AccountBox(props)
{
    return <BoxContainer>
                <TopContainer>
                    <BackDrop/>
                    <HeaderContainer>
                        <HeaderText> Bienvenido </HeaderText>
                        <SubheaderText> Ingresa a tu cuenta.</SubheaderText>
                    </HeaderContainer>
                </TopContainer>
            </BoxContainer>
}