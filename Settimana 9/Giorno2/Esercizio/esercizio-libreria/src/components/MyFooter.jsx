import Container from "react-bootstrap/esm/Container"


const MyFooter= () => {
    const footStyle = {
        position: 'fixed',
        bottom: '0'       
    }
    return (
        <>
        <Container fluid className="bg-dark text-white" style={footStyle}>
            <div className="text-center">
            <span> Copyright Pinuo s.r.l. </span>
            <br></br>
            <span>All rights reserved.</span>
            </div>
        </Container>
        </>
    )
}

export default MyFooter