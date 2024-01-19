import { Col, Container, Row } from "react-bootstrap"
import {useState, useEffect} from 'react'
import '../assets/css/CardCity.css';


const CardCity = ({city}) => {
    const [cityData, setCityData] = useState(
        {
            "coord": {
                "lon": 0,
                "lat": 0
            },
            "weather": [
                {
                    "id": 0,
                    "main": "",
                    "description": "",
                    "icon": ""
                }
            ],
            "base": "",
            "main": {
                "temp": 0,
                "feels_like": 0,
                "temp_min": 0,
                "temp_max": 0,
                "pressure": 0,
                "humidity": 0
            },
            "visibility": 0,
            "wind": {
                "speed": 0,
                "deg": 0
            },
            "clouds": {
                "all": 0
            },
            "dt": 0,
            "sys": {
                "type": 0,
                "id": 0,
                "country": "",
                "sunrise": 0,
                "sunset": 0
            },
            "timezone": 0,
            "id": 0,
            "name": "",
            "cod": 0
        }
    );

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const key = '&APPID=25e1b8a92164beae4d571e17a214d5f2&units=metric';
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (city) {
            const resp = await fetch(baseURL + city + key);
            if (resp.ok) {
              const data = await resp.json();
              setCityData(data);
                console.log(cityData);
            } else {
              console.error('Error in the HTTP request');
            }
          }
        } catch (error) {
          console.error('Error in the HTTP request:', error);
        }
      };
  
      fetchData();
    }, [city]);


    return (
        <div id="div-card" >
    <Container >
        <Row>
        <Col className="d-flex colonna ">
            <h1>{cityData.name}, {cityData.sys.country}</h1>
            <h1 className="ms-4">{cityData.main.temp.toFixed(0)}°</h1>
        </Col>
        </Row>
        <Row>
        <Col className="d-flex align-items-center ">
            <h3>{cityData.weather[0].description}</h3>
            <img style={{width:'100px'}} src={`./src/assets/icons/${cityData.weather[0].icon}.png`} />   
        </Col>
        </Row>
        
        <Row>
        <Col className="d-flex align-items-center colonna">
            <p>Max: {cityData.main.temp_max.toFixed(0)}°</p>
            <p>Min: {cityData.main.temp_min.toFixed(0)}°</p>
            
            
            <p>Umidity: {cityData.main.humidity.toFixed(0)}%</p>
            
        </Col>
        </Row>
        <Row>
        <Col className="d-flex colonna align-items-center">
        <img style={{width:'50px'}}src="./src/assets/icons/wind.png"/>
            <p style={{marginTop:'20px'}}>Wind: {cityData.wind.speed} Knots</p>
           
        </Col>
        </Row>
        
    </Container>
    </div>
    )
}
export default CardCity

