import Container from "react-bootstrap/esm/Container";

function Footer() {
    const footerStyle = {
        position:'fixed',
        bottom: '0'
    }
    return(
    <>
    <Container fluid className='bg-dark text-white py-4 text-center' style={footerStyle}>
        <span>Copyright Pinuo. Tutti i diritti riservati</span>
    </Container>
    </>
    )
}
export default Footer