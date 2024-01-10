import { Button } from "react-bootstrap"


const Jumbotron = () => {
    return(
        <div className="container-fluid" style={{height:'30vh', marginTop:'10vh'}}>
            <h1>Libreria Pinuo</h1>
            <p>La prima libreria in React</p>
            <hr />
            <Button variant="outline-success">Lascia una recensione</Button>
        </div>
    )
}

export default Jumbotron