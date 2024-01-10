import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BookList from './componenets/BookList'
import { Container, Row } from 'react-bootstrap'
import Jumbotron from './componenets/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className='text-center' >
        <Jumbotron />
        <Row>
      <BookList />
      </Row>
      </Container>
    </>
  )
}

export default App
