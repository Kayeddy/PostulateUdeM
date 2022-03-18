import './App.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//components
import { AccountBox, HomePage } from './components/HomePage';
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
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={
          <AppContainer>
          <Navigation/>
          <HomePage/>
        </AppContainer>
        }/>
      </Routes>
    </Router>
        
    </>
  ); 
}

export default App;
