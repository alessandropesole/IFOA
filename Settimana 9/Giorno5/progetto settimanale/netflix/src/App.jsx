import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import GalleryOne from './components/GalleryOne';
import { Container } from 'react-bootstrap';
import Interface from './components/Interface';




function App() {

  return (
    <>
    
    <MyNavbar />
    <Container>
    <Interface/>
    <GalleryOne saga='the matrix' />
    <GalleryOne saga='avatar'  />
    <GalleryOne saga='pokemon' />
    </Container>
    <MyFooter />
   
    </>
  )
}

export default App
