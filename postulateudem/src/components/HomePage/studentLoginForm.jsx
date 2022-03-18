import React from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, MutedLink} from "./formElements";

export function StudentForm(props)
{
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="ID"></Input>
                    <Input type="password" placeholder="Contraseña"></Input>
                    <SubmitButton type="submit"> Ingresar </SubmitButton>
                    <MutedLink>¿Olvidaste te contraseña?</MutedLink>
                </FormContainer>
           </BoxContainer>
}
