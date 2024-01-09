
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/NavBarDark'
import Footer from './components/Footer'
import {Container, Row, Col} from 'react-bootstrap'
import Jumbotron from './components/JumboTron'
import Lista from './components/List'


function App() {
 

  return (
    <>
      <div>
       <BasicExample />
       <Container style={{minHeight: '85vh'}}>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
        <Lista />
        </Row>
       </Container>
       <Footer />
      
      </div>
      
    </>
  )
}

export default App
