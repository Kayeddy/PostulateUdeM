import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StudentForm } from './studentLoginForm';
import { EnterpriseForm } from './enterpriseLoginForm';
import { AdminForm } from './adminLoginForm';

const BoxContainer = styled.div`
width: 260px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0px 0px 5px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
flex-direction: column;
padding-top: 60px;
padding-left: 10px;
padding-bottom: 1.8em;
`;

const BackDrop = styled(motion.div)`
width: 160%;
height: 540px;
top: -290px;
left: -70px;
transform: rotate(60deg);
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
background: rgb(194, 12, 25);
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
color: #fff;
z-index: 10;
`;

export const CurrentActiveUser = styled.h2`
width: 100%;
font-size: 20px;
font-weight: 600;
line-height: 1.24;
margin: 0;
padding: 0px 5%;
color: #fff;
transform: translate(22%, -55px);
z-index: 10;
`;

const InnerContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 15px;
`;

export const ChangeUserButton = styled.button`
width: 15%;
z-index: 10;
transform: translate(190px, -80px);
color: #aaa;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(255, 255, 255);
`;



const backDropVariants = 
{
    expanded: 
    {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed:
    {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

export function AccountBox(props)
{
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("Estudiante");
    const users = ["Estudiante", "Empresa", "Admin"];

    const playExpandingAnimation = () =>
    {
         setExpanded(true);
         setTimeout(() =>
         {
            setExpanded(false);
         }, 400);
    }
    const switchUser = () =>
    {
        playExpandingAnimation();
        setTimeout(() =>
        {
            if(active === users[0])
            setActive(users[1]);
            else if(active === users[1])
            setActive(users[2]);
            else 
            setActive(users[0])
        }, 200);
    }

    return <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backDropVariants}/>
                    <HeaderContainer>
                        <CurrentActiveUser> {active} </CurrentActiveUser>
                        <ChangeUserButton onClick={switchUser}>➯</ChangeUserButton>
                        <HeaderText> Bienvenido </HeaderText>
                        <SubheaderText> Ingresa a tu cuenta.</SubheaderText>
                    </HeaderContainer>
                </TopContainer>
                <InnerContainer> 
                    {active === users[0] && <StudentForm />}
                    {active === users[1] && <EnterpriseForm />}
                    {active === users[2] && <AdminForm />}
                </InnerContainer>
            </BoxContainer>
                
            
}