import { useState } from "react"
import { Button, Form } from "react-bootstrap"


const NewComment = ({postData}) => {
const [newComment,setNewComment] = useState({
    comment: '',
    rate: ''
})

const sendData =() => {
    postData(newComment)
}

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
    <Form.Control type="text" placeholder="Type your comment..." value={newComment.comment} onChange={(e) => setNewComment({...newComment, comment: e.target.value}) } />
    <Form.Select aria-label="Default select example" value={newComment.rate} onChange={(e) => setNewComment({...newComment, rate: e.target.value})}>
                    <option>Select a rate</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
    </Form.Select>
    <Button variant="outline-primary" size="sm" className="my-3" onClick={() => sendData()}>Submit</Button>
    
    </div>
    )
}
export default NewComment