import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/citta?cerca=' + search)
}

  return (
    <>
      <Container id="home">
        <div>
          <input type='text' name="search" id="input-text" placeholder="Cerca una città..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch}>Cerca</button>
        </div>
      </Container>
    </>
  )

}

export default Home