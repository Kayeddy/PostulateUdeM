import './App.css';
import styled from 'styled-components';

//components
import { AccountBox } from './components/AccountBox';


const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 10%;
`;

function App() {
  return <AppContainer>
            <AccountBox />
         </AppContainer>;
}

export default App;
