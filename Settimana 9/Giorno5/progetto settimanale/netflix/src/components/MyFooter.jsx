import { Col, Container, Row, Nav, NavLink, Navbar, Button } from "react-bootstrap"



const MyFooter = () => {
    return (

        <Container style={{ marginLeft: '26vw' }}>
            <Navbar>
                <Row>
                    <Col>
                        <Nav>
                            <Nav.Link> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="28"
                                viewBox="0 0 448 512">
                                <path fill="#808080"
                                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                            </svg> </Nav.Link>
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="28"
                                    viewBox="0 0 448 512">
                                    <path fill="#808080"
                                        d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                                </svg>
                            </NavLink>
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor"
                                    className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path fill="#808080"
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                                </svg>
                            </NavLink>
                            <NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor"
                                   className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path fill="#808080"
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </NavLink>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
            <Navbar>
                <Row>
                    <Col >
                        <Nav className="d-flex flex-column">
                            <Nav.Link href="#link" className="nav-item text-secondary"> Audio and Subtitles </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Media Center </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary">  Privacy </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Contact Us </Nav.Link>
                            <Nav.Link><Button variant="bg-secondary" className="btn btn-outline-secondary bottone-footer"><small>Service
                                Code</small></Button></Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary" > Service
                                Code</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="d-flex flex-column">
                            <Nav.Link href="#link" className="nav-item text-secondary"> Audio Description </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Investor Relations </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary">  Legal Notices </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="d-flex flex-column">
                            <Nav.Link href="#link" className="nav-item text-secondary"> Help Center </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Jobs </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Cookie Preferences </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="d-flex flex-column">
                            <Nav.Link href="#link" className="nav-item text-secondary"> Help Center </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Jobs </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Cookie Preferences </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="d-flex flex-column">
                            <Nav.Link href="#link" className="nav-item text-secondary"> Gift Cards </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary">Term of Use </Nav.Link>
                            <Nav.Link href="#link" className="nav-item text-secondary"> Corporate Information </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </Container>


    )
}
export default MyFooter