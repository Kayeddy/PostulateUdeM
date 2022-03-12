import React from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, BoldedLink} from "./formElements";

export function EnterpriseSignupForm(props)
{
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="NIT"></Input>
                    <Input type="text" placeholder="Razón social"></Input>
                    <SubmitButton type="submit"> Registrarse </SubmitButton>
                </FormContainer>
           </BoxContainer>
}
