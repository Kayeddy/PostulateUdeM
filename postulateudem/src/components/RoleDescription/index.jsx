import React, { useState } from 'react';
import styled from 'styled-components';
import { Blob, StudentImage, EnterpriseImage } from './generalElements';

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
width: 50%;
height: 100%;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`;

const HeaderText = styled.h2`
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


export function Roles(props)
{
    const [active, setActive] = useState("Estudiante");
    return(
        <>
        <MainContainer>
            <GraphicsContainer>
                <Blob/>
                {active === "Estudiante" && <StudentImage src={require('../../assets/Images/Characters/student.png')} alt="Logo de la universidad"/>}
                {active === "Empresa" && <EnterpriseImage src={require('../../assets/Images/Characters/enterprise.png')} alt="Logo de la universidad"/>}

            </GraphicsContainer>

            <TextContainer>
                <HeaderText> Instrucciones a seguir para estudiantes: </HeaderText>
                <List>
                    <ListBullet><DescriptionText> Ingrese el número de identificación sin puntos ni comas.  </DescriptionText></ListBullet>
                    <ListBullet><DescriptionText> La contraseña corresponde a su fecha de nacimiento, escrito en formato dd/mm/aaaa. </DescriptionText></ListBullet>
                    <ListBullet><DescriptionText> Si cambiaste la clave en algun momento, ingresa tu nueva clave. </DescriptionText></ListBullet>
                    <ListBullet><DescriptionText> Si usaste el servicio de "Olvide mi clave", entonces ingresa la nueva clave asignada por el sistema. </DescriptionText></ListBullet>
                    <ListBullet><DescriptionText> Abajo pudes solicitar una contraseña nueva o ser asignado uno provisional. </DescriptionText></ListBullet>
                </List>
            </TextContainer>
        </MainContainer>
            

        </>
    );
}