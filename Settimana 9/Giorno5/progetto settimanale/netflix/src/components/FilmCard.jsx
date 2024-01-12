import { Card } from 'react-bootstrap';

const FilmCard = ({ film }) => {
  return (
   
      <Card id="card-film" href='#' style={{border:'none', width:'20rem'}}>
        <Card.Img src={film.Poster} alt={film.Title} style={{height: '10rem', objectFit: 'cover'}}></Card.Img>
      </Card>
    
  );
};

export default FilmCard;
