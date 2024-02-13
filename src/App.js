import './App.css';
import Calculator from './Components/Calculator';
import Profile from './Components/Profile';
import { Container } from 'react-bootstrap';
import NavigationBar from './Components/Header';

function App() {
  return (
    <Container style={{marginTop: 10}}>
            <NavigationBar />
            <h1>Self-Profile Application</h1>
            <Profile />
            <Calculator />
        </Container>
  );
}

export default App;
