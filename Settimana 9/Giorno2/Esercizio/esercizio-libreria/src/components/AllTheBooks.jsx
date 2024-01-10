import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookLists from "./BookLists";


const AllTheBooks = () => {

  const [books, setBook] = useState([])
  return (
    <>
      <BookLists setBook={setBook} />
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {books.map((book) =>
          <Card style={{ width: '18rem', margin: '20px 0' }} key={book.asin}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.price}'$'
              </Card.Text>
              <Button variant="primary">Acquista</Button>
            </Card.Body>
          </Card>
        )}
      </div>
    </>

  )
}

export default AllTheBooks