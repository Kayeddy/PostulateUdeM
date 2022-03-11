import React from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, MutedLink} from "./formElements";

export function EnterpriseForm(props)
{
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="NIT"></Input>
                    <Input type="text" placeholder="Razón social"></Input>
                    <SubmitButton type="submit"> Ingresar </SubmitButton>
                </FormContainer>
           </BoxContainer>
}
