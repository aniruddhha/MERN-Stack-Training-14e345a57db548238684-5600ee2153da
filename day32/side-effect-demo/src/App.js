import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideEffectBasics from './side-effect-basics'

function App() {
  return (
    <Container>
      <Row>
        <h1>Hello</h1>
      </Row>
      <Row>
        <SideEffectBasics msg="Android " />
      </Row>
    </Container>
  );
}

export default App;
