import './App.css';
import styled from 'styled-components';

//components
import { AccountBox } from './components/AccountBox';
import { Navigation } from './components/Navigation';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function App() {
  return <AppContainer>
              <Navigation/>
              <AccountBox />
          </AppContainer>;
}

export default App;
