import React from "react";
import { useState } from "react";
import {BoxContainer, FormContainer, Input, SubmitButton, BoldedLink} from "./formElements";

export function EnterpriseForm(props)
{
    const [active, setActive] = useState("Enterprise");
    const switchToSignup = () =>
    {
        setActive("EnterpriseSignup");
    }
    return <BoxContainer>
                <FormContainer>
                    <Input placeholder="NIT"></Input>
                    <Input type="text" placeholder="Razón social"></Input>
                    <SubmitButton type="submit"> Ingresar </SubmitButton>
                    <BoldedLink onClick={switchToSignup}> Regístrate como empresa </BoldedLink>
                </FormContainer>
           </BoxContainer>
}
