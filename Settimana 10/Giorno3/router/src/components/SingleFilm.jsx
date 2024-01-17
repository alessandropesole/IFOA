import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleFilm = ({movie}) => {
    return (
        <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body className='d-flex justify-content-center align-items-center'>
          <Button variant="primary" > <Link className=' text-white text-decoration-none' to={`/moviedetails/${movie.imdbID}`}>Visualizza dettagli</Link></Button>
        </Card.Body>
      </Card>

    )

} 
export default SingleFilm