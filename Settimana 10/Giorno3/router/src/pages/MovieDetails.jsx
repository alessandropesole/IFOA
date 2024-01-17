import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import NewComment from '../components/newComment';


const MovieDetails = () => {
    const [film, setFilm] = useState([])
    const [comments, setComments] = useState([])

    const params = useParams()

    //FETCH API MOVIES (GET)
    const fetchMoviesDetails = async () => {
        try {
            const res = await fetch('http://www.omdbapi.com/?i=' + params.movieid + '&apikey=1a73cf6e')
            const data = await res.json()
            setFilm(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMoviesDetails()
    }, [])

    //FETCH API COMMENTI (GET)
    const fetchComments = async () => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + params.movieid + '/comments', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDU1MDY2NzMsImV4cCI6MTcwNjcxNjI3M30.5tAj6SsI6HrwvvNIN6YaZMx2N67xk__QirAYTBXP-sY',
                }

            })
            const data = await res.json()
            setComments(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])



    //FETCH API COMMENTI (DELETE)
    const deleteComment = async (commentid) => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + commentid, {
                method: 'DELETE',
                headers: {

                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDU1MDY2NzMsImV4cCI6MTcwNjcxNjI3M30.5tAj6SsI6HrwvvNIN6YaZMx2N67xk__QirAYTBXP-sY',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchComments()
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    //FETCH API COMMENTI (POST)
    const postComment = async (newComment) => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify({ ...newComment, elementId: film.imdbID }),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDU1MDY2NzMsImV4cCI6MTcwNjcxNjI3M30.5tAj6SsI6HrwvvNIN6YaZMx2N67xk__QirAYTBXP-sY',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchComments()
            }
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <Container className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={film.Poster} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{film.Title}</Card.Title>
                    <Card.Text>
                        Year: <b>{film.Year}</b>
                    </Card.Text>
                </Card.Body>
                <hr />
                <div className='d-flex flex-column align-items-center'>
                    <h5>Add a comment </h5>
                    <NewComment postData={postComment} />
                </div>
                <ListGroup className="list-group-flush">
                    {comments.map((comment) => (
                        <ListGroup.Item key={comment._id} className='d-flex justify-content-between'>
                            <div>
                                <small>{comment.comment}</small>

                            </div>
                            <div>
                                <small className='ps-5'>Rate: {comment.rate}</small>
                                <svg onClick={() => deleteComment(comment._id)} className='ms-3 bi bi-trash-fill' style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg>
                            </div>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default MovieDetails