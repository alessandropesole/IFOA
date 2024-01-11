import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import CommentSection from './CommentSection';


const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)
    
    return (
        <div className='d-flex flex-column'>
        <Card style={{ width: '18rem', margin: '20px 0', border: selected && '4px solid red' }} onClick={() => setSelected(!selected)} key={book.asin}>
        <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {book.price}'$'
                </Card.Text>
                <Button  variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
       {selected && < CommentSection asin={book.asin} /> }
        </div>
    )
}



export default SingleBook