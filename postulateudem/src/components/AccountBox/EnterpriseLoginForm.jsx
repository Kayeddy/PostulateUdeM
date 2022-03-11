import React from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, BoldedLink} from "./formElements";

export function EnterpriseForm(props)
{
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="NIT"></Input>
                    <Input type="text" placeholder="Razón social"></Input>
                    <SubmitButton type="submit"> Ingresar </SubmitButton>
                    <BoldedLink> Registrate como empresa </BoldedLink>
                </FormContainer>
           </BoxContainer>
}
