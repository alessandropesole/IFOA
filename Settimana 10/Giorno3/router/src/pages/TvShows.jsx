import {useState, useEffect} from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import SingleFilm from '../components/SingleFilm'

const TvShows = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const fetchData = async () => {
       try { 
        const res = await fetch( 'http://www.omdbapi.com/?s=' + search + '&apikey=1a73cf6e' )
        const data = await res.json()
        if (data.Search) {
        setMovies(data.Search)
        }
        console.log(movies);
    }
    catch(err) {
        console.log(err);
    }
}

useEffect(() => {
    if (search?.length > 4)
    fetchData()
}, [search])


    return (
        <>
        <Container className='mb-5'>
        <div className='d-flex flex-column align-items-center'>
            <h1  style={{margin: '30px 0 10px 0', }}>Cerca un titolo</h1>
            <input  type="text" name="search" value={search} onChange= {(e) => setSearch(e.target.value)} />
            </div>
            </Container>
        <Container className='d-flex justify-content-center'>
            <Row sm={'12'}>
             {movies.length>0 && movies.map((movie)=> (
                <Col sm={'3'} className="d-flex justify-content-center my-3" key= {movie.imdbID}>
                    <SingleFilm movie={movie}></SingleFilm>
                </Col>
             ))}   
            
            </Row>
            
        </Container>
    
        </>
    )
}

export default TvShows