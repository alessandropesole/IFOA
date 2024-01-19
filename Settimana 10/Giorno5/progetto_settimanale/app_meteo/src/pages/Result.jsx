import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"


const Result = () => {
    const location = useLocation()
    const searchCity = new URLSearchParams(location.search).get('cerca')

    const [search, setSearch] = useState("")
    const [cities, setCities] = useState([])

    const fetchData = async () => {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + search + '&APPID=25e1b8a92164beae4d571e17a214d5f2';
        try {
          fetch(apiUrl)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Errore nella risposta del server: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              setCities(data)
              console.log(cities);
            })
            .catch(error => {
              console.error('Errore nella richiesta:', error);
            });
        } catch (error) {
          console.error('Errore generale:', error);
        }
      }
    
      useEffect(() => {
        if (searchCity.length > 3)
          setSearch(searchCity)
      }, [])

      useEffect(() => {
        if (search?.length > 3)
        fetchData()
    }, [search])

    return (
        <>
            <div style={{ minHeight: "70vh"}} className="my-5 text-center">
                <h1>Risultati ricerca</h1>
                <h2>{cities.name}</h2>
            </div>
        </>
    )
    
}

export default Result