
import { Row, Col } from 'react-bootstrap';
import FilmCard from './FilmCard';
import { useState, useEffect } from 'react';
import SpinnerLoading from './SpinnerLoading';
import ErrorMessage from './ErrorMessage';


const GalleryOne = ({ saga }) => {
    const [films, setFilms] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await fetch(
                'http://www.omdbapi.com/?s=' + saga + '&apikey=1a73cf6e'
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div style={{ marginBottom: '10vh' }}>
                <h3 style={{ color: 'white', marginBottom: '0' }}>{saga.toUpperCase()}</h3>
                <Row>

                    {films.slice(0, 4).map((film) => (
                        <Col sm={'3'} style={{ margin: '30px 0' }} key={film.imdbID}>
                            {Loading && <SpinnerLoading />}
                            {Error && <ErrorMessage />}
                            <FilmCard film={film}></FilmCard>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};
export default GalleryOne