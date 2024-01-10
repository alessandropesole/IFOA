import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)
    const selectedStyle ={
        border:'2px solid red',
    }
    return (
        <Card style={{ width: '18rem', margin: '20px 0' }} key={book.asin}>
            <Card.Img variant="top"  src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {book.price}'$'
                </Card.Text>
                <Button  variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
    )
}



export default SingleBook