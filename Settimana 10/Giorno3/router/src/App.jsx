
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShows from './pages/TvShows';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path ='/' element= {<Home />} />
      <Route path='/tvshows' element={<TvShows />} />
      <Route path="/moviedetails/:movieid" element={<MovieDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
