import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import GalleryOne from './components/GalleryOne';
import { Container } from 'react-bootstrap';
import Interface from './components/Interface';




function App() {

  return (
    <>
    <Container fluid>
    <MyNavbar />
    <Interface/>  
    <GalleryOne saga='batman' />
    <GalleryOne saga='the lord of the rings'  />
    <GalleryOne saga='black mirror' />
    <MyFooter />
    </Container>
    
    </>
  )
}

export default App
