import { Button } from "react-bootstrap"
import FeedbackForm from "./FeedbackForm"



const Jumbotron = () => {
    return(
        <>
        <div className="container-fluid" style={{margin: '100px 0', marginTop:'10vh'}}>
            <h1>Libreria Pinuo</h1>
            <p>La prima libreria in React</p>
            <hr />
        </div>
        <FeedbackForm />
        </>
    )
}

export default Jumbotron