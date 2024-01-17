import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';


const MovieDetails = () => {
    const [film, setFilm] = useState([])
    const [comments,setComments] = useState([])

    const params = useParams()

    const fetchComments = async () => {
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/movies/'+ params.movieid +'/comments', {
                headers: {
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDU1MDY2NzMsImV4cCI6MTcwNjcxNjI3M30.5tAj6SsI6HrwvvNIN6YaZMx2N67xk__QirAYTBXP-sY',
            }
                
            })
            const data = await res.json()
            setComments(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect (() => {
        fetchComments()
    }, [])


    const fetchMoviesDetails = async() => {
        try {
            const res = await fetch('http://www.omdbapi.com/?i=' + params.movieid +'&apikey=1a73cf6e')
            const data = await res.json()
            setFilm(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect (() => {
        fetchMoviesDetails()
    }, [])

    return (
        <Container className='d-flex justify-content-center mt-5'>
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src= {film.Poster} />
        <Card.Body>
          <Card.Title>{film.Title}</Card.Title>
          <Card.Text>
            {film.year} 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            {comments.map((comment)=>(
                <ListGroup.Item key={comment._id} className='d-flex justify-content-between'><small>{comment.comment}</small><small>Rate: {comment.rate}</small></ListGroup.Item>
            ))}  
        </ListGroup>
        <Card.Body>
          
        </Card.Body>
      </Card>
      </Container>
    )
}

export default MovieDetails