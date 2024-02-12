import './App.css';
import Calculator from './Components/Calculator';
import Profile from './Components/Profile';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
            <h1>Self-Profile Application</h1>
            <Profile />
            <Calculator />
        </Container>
  );
}

export default App;
