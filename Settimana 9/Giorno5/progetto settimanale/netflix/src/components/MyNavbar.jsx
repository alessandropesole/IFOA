import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/Custom.css'


const MyNavbar = () => {

  return (
    <Navbar expand="lg" id="my-nav" >
      <Container >
        <Navbar.Brand href="#home"><img src="../../../src/assets/imgs/netflix_logo.png" style={{ height: '40px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
          <Nav className="me-auto" >
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Movies</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#link" className='text-white'>My List</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#link" className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg></Nav.Link>
            <Nav.Link href="#link" className='text-white'>KIDS</Nav.Link>
            <Nav.Link href="#link" className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg></Nav.Link>
            <NavDropdown id="basic-navdropdown" title={<img src="../../../src/assets/imgs/avatar.png" style={{ height: '50px' }} className="bg-dark" />}>
              <NavDropdown.Item href="#action/3.1" ><img src="../../../src/assets/imgs/avatar.png" style={{ height: '30px' }} /> Pierino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Manage Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Signout Netflix
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default MyNavbar