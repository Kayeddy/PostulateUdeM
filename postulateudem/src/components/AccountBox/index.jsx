import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './adminLoginForm';
import { StudentForm } from './studentLoginForm';
import { motion } from 'framer-motion';

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
padding: 0 1.8rem;
padding-top: 100px;
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

const InnerContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 15px;
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
    const [active, setActive] = useState("Student");

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
            if(active === "student")
            setActive("Enterprise");
            else if(active === "Enterprise")
            setActive("Admin");
            else 
            setActive("Student")
        }, 200);
    }

    const contextValue = 
    {
        switchUser
    }
    return <AccountContext.provider value={contextValue}>
                <BoxContainer>
                    <TopContainer>
                        <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backDropVariants}/>
                        <HeaderContainer>
                            <HeaderText> Bienvenido </HeaderText>
                            <SubheaderText> Ingresa a tu cuenta.</SubheaderText>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer> 
                        <StudentForm />
                    </InnerContainer>
                </BoxContainer>
            </AccountContext.provider>
}