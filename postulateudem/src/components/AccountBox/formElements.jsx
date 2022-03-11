import React from "react";
import styled from "styled-components";

export const BoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const FormContainer = styled.form`
width: 100%;
display: flex; 
flex-direction: column;
`;

export const MutedLink = styled.a`
font-size: 12px;
color: rgba(200, 200, 200, 0.8);
font-weight: 500;
margin: 5px auto;
text-decoration: none;
cursor: pointer;
padding-left: 2px;
`;

export const BoldedLink = styled.a`
font-size: 14px;
color: rgba(200, 200, 200, 0.8);
font-weight: 600;
margin: 5px auto;
text-decoration: none;
cursor: pointer;
padding-left: 2px;
`;

export const Input = styled.input`
width: 100%;
height: 42px;
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
margin-bottom: 5px;
border-top: 1.4px solid transparent;
transition: all 200ms ease-in-out;

&::placeholder{
    color: rgba(200, 200, 200, 1);
}
&:not(:last-of-type){
    border-bottom: 1.5 solid rgba(200, 200, 200, 0.4);
}
&:focus{
    animation: glow 800ms ease-out infinite alternate;
    outline: none;
    
}
@keyframes glow {
    0% {
		box-shadow: 0 0 4px rgba(194, 12, 25, 0.8);
    }	
    100% {
		box-shadow: 0 0 20px rgba(194, 12, 25, 0.8);
    }
}
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 11px 10px;
margin: 10px 10px;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(194, 12, 25);
`;

