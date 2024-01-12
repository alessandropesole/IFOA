
import { Row, Col } from 'react-bootstrap';
import FilmCard from './FilmCard';
import { useState, useEffect } from 'react';
import SpinnerLoading from './SpinnerLoading';
import ErrorMessage from './ErrorMessage';


const GalleryOne = ({ saga  }) => {
  const [films, setFilms] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const fetchData = async () => {
    try {
        setLoading(true)
      const res = await fetch(
        'http://www.omdbapi.com/?s='+saga+'&apikey=1a73cf6e'
      );
      if (res.ok) {
        let data = await res.json();
        setFilms(data.Search);
        console.log(data.Search);
        setLoading(false)
      } else {
        console.log('error');
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  };
  function capitalize(stringa) {
    return stringa.replace(/\b\w/g, function(l) {
        return l.toUpperCase();
    });
}
  useEffect(() => {
   fetchData();
  }, []);
  
  return (
    <>
      <div style={{marginBottom:'10vh'}} >
        <h3 style={{color:'white', margin:'1.5vh'}} >{capitalize(saga)}</h3>
        <Row sm={'12'} className='d-flex justify-content-center' >
           
          {films.slice(0,6).map((film) => (
            <Col sm={'2'}  className='d-flex justify-content-center' key={film.imdbID}>
                {Loading &&  <SpinnerLoading /> }
                {Error && <ErrorMessage /> }
              <FilmCard film={film}></FilmCard>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default GalleryOne