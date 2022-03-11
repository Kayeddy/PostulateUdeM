import React from "react";
import {BoxContainer, FormContainer, Input, SubmitButton} from "./formElements";

export function AdminForm(props)
{
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="ID"></Input>
                    <Input type="password" placeholder="Contraseña"></Input>
                    <SubmitButton type="submit"> Ingresar </SubmitButton>
                </FormContainer>
           </BoxContainer>
}
