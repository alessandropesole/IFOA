import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import {Container, Row} from 'react-bootstrap';
import Jumbotron from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import FormFeedback from './components/Form';



function App() {
 
  return (
    <>
    <MyNav />
      <Container className='my-5 text-center'>
        <Row>
          <Jumbotron/>
          
        </Row>
        <Row>
          <AllTheBooks />
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
