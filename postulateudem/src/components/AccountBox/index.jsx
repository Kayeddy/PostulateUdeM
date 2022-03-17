import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StudentForm } from './studentLoginForm';
import { EnterpriseForm } from './EnterpriseLoginForm';
import { AdminForm } from './adminLoginForm';
import { EnterpriseSignupForm } from './EnterpriseSignupForm';
import { Blob, StudentImage, EnterpriseImage, AdminImage } from './generalInfoElements';

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

const DataContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
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

const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const InnerContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 15px;
`;

const MainContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
`;

const GraphicsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 10%;
width: 50%;
height: 100%;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 60%;
height: 100%;
`;

const InputSection = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const InfoSection = styled.div`
width: 50%;
height: 100%;
display: flex;  
flex-direction: row;
align-items: center;
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

const InfoBackDrop = styled(motion.div)`
width: 10px;
height: 100%;
top: 50px;
left: 770px;
position: absolute;
display: flex;
flex-direction: column;
background: rgb(194, 12, 25);
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

const InfoHeaderText = styled.h2`
font-size: 40px;
font-weight: 600;
line-height: 1.24;
margin: 0;
color: #000;
z-index: 10;
`;

const List = styled.ul`
list-style: none;
`;

const ListBullet = styled.li`
position:relative;
margin-bottom: 0; 
padding-bottom: 2.5em;


::after {
content: url('http://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RedDisc.svg/20px-RedDisc.svg.png');
position: absolute;
left: -26px; 
top: 0px;
}

::before {
content:"";
position: absolute;
left: -16px; 
border-left: 1px solid black;
height: 100%;
width: 1px;
}

::first-child:before {
top: 10px; 
}

::last-child:before {
height: 6px; 
}
`;

const DescriptionText = styled.h2`
font-size: 20px;
font-weight: 400;
line-height: 1.24;
margin: 0;
color: #000;
z-index: 10;
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

const infoBackDropVariants = 
{
    expanded: 
    {
        width: "55%",
        position: "absolute",
        top: "50px",
        height: "97%",
        transform: "translateX(10px)"
    },
    collapsed:
    {
        position: "absolute",
        top: "50px",
        left: "770px",
        width: "0px",
        height: "100%",
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
         }, 300);
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

    return(
        <>
            <DataContainer>
                <InputSection>
                    <BoxContainer>
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
                            {active === "EnterpriseSignup" && <EnterpriseSignupForm/>}
                            {active === users[0] && <StudentForm />}
                            {active === users[1] && <EnterpriseForm />}
                            {active === users[2] && <AdminForm />}
                        </InnerContainer>
                    </BoxContainer>
                </InputSection>

                <InfoSection>
                            <MainContainer>
                            <InfoBackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={infoBackDropVariants}/>
                                <GraphicsContainer>
                                    <Blob/>
                                    {active === "Estudiante" && <StudentImage src={require('../../assets/Images/Characters/student.png')} alt="Logo de la universidad"/>}
                                    {active === "Empresa" && <EnterpriseImage src={require('../../assets/Images/Characters/enterprise.png')} alt="Logo de la universidad"/>}
                                    {active === "Admin" && <EnterpriseImage src={require('../../assets/Images/Characters/admin.png')} alt="Logo de la universidad"/>}

                                </GraphicsContainer>

                                <TextContainer>
                                    {active === "Estudiante" && <>
                                    <InfoHeaderText> Instrucciones a seguir para estudiantes: </InfoHeaderText>
                                    <List>
                                        <ListBullet><DescriptionText> Ingrese el número de identificación sin puntos ni comas.  </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> La contraseña corresponde a su fecha de nacimiento, escrito en formato dd/mm/aaaa. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si cambiaste la clave en algun momento, ingresa tu nueva clave. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si usaste el servicio de "Olvide mi clave", entonces ingresa la nueva clave asignada por el sistema. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Abajo pudes solicitar una contraseña nueva o ser asignado uno provisional. </DescriptionText></ListBullet>
                                    </List>
                                    </>}

                                    {active === "Empresa" && <>
                                    <InfoHeaderText> Instrucciones a seguir para empresas: </InfoHeaderText>
                                    <List>
                                        <ListBullet><DescriptionText> Ingrese el número de identificación sin puntos ni comas.  </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> La contraseña corresponde a su fecha de nacimiento, escrito en formato dd/mm/aaaa. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si cambiaste la clave en algun momento, ingresa tu nueva clave. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si usaste el servicio de "Olvide mi clave", entonces ingresa la nueva clave asignada por el sistema. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Abajo pudes solicitar una contraseña nueva o ser asignado uno provisional. </DescriptionText></ListBullet>
                                    </List>
                                    </>}

                                      {active === "Admin" && <>
                                    <InfoHeaderText> Instrucciones a seguir para administradores: </InfoHeaderText>
                                    <List>
                                        <ListBullet><DescriptionText> Ingrese el número de identificación sin puntos ni comas.  </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> La contraseña corresponde a su fecha de nacimiento, escrito en formato dd/mm/aaaa. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si cambiaste la clave en algun momento, ingresa tu nueva clave. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Si usaste el servicio de "Olvide mi clave", entonces ingresa la nueva clave asignada por el sistema. </DescriptionText></ListBullet>
                                        <ListBullet><DescriptionText> Abajo pudes solicitar una contraseña nueva o ser asignado uno provisional. </DescriptionText></ListBullet>
                                    </List>
                                    </>}
                                   
                                </TextContainer>
                    </MainContainer>
                </InfoSection>

            </DataContainer>
            
    </>
    );    
}