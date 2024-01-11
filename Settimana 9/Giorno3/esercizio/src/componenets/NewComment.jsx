import { Button, Form } from "react-bootstrap"
import CommentSection from "./CommentSection"


const NewComment = () => {
    return (
        <div style={{border: '1px solid black'}}>
            <small> Lascia una recensione</small>
            <Form.Control type="text" placeholder="Scrivi una recensione" />
            <Form.Select aria-label="Voto recensione">
                <option>Seleziona il punteggio</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </Form.Select>
            <Button variant= "outline-primary" size ="sm" className="mt-2">Invia</Button>
            
        </div>
       
    )
}

export default NewComment