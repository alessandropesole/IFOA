import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

function MyNavbar() {
    const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className='text-light'>Netflix-Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link className="text-light" onClick={() => navigate('/tvshows')}>Tv Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;