import './App.css';
import styled from 'styled-components';



//components
import { AccountBox } from './components/AccountBox';
import { Navigation } from './components/Navigation';
import { Roles } from './components/RoleDescription';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const DataContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
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


function App() {
  return <AppContainer>
           <Navigation/>
            
          <DataContainer>
              <InputSection>
                <AccountBox />
              </InputSection>

              <InfoSection>
                <Roles/>
              </InfoSection>
          </DataContainer>
            
         </AppContainer>;
}

export default App;
