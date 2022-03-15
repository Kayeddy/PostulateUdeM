import react from 'react';
import { Container, Wrapper, LogoContainer, TitleContainer, CustomTitle } from './navComponents';


export function LandingNavigation(props)
{
    return(
        <>
            <Container>
                <Wrapper>
                    <LogoContainer>
                        <img src={require('../../assets/Images/udem_logo.png')} alt="Logo de la universidad"/>
                    </LogoContainer>
                    <TitleContainer>
                        <CustomTitle>
                            PRÁCTICAS ESTUDIANTILES
                        </CustomTitle>
                    </TitleContainer>
                </Wrapper>
            </Container>
        </>
    );
}