

const CardsNextDays = ({nextDay}) => {
    return (
        <div>
        <Container >
            <Row>
            <Col className="d-flex colonna ">
                <h1>{nextDay.dt_txt}</h1>
                <h1 className="ms-4">{nextDay.list[0].main.temp.toFixed(0)}°</h1>
            </Col>
            </Row>
            <Row>
            <Col className="d-flex align-items-center ">
                <h3>{nextDay.weather[0].description}</h3>
                <img style={{width:'100px'}} src={`./src/assets/icons/${nextDay.weather[0].icon}.png`} />   
            </Col>
            </Row>
            
            <Row>
            <Col className="d-flex align-items-center colonna">
                <p>Max: {nextDay.list[0].main.temp_max.toFixed(0)}°</p>
                <p>Min: {nextDay.list[0].main.temp_min.toFixed(0)}°</p>
                <p>Umidity: {nextDay.list[0].main.humidty}%</p>   
            </Col>
            </Row>
            <Row>
            <Col className="d-flex colonna align-items-center">
            <img style={{width:'50px'}}src="./src/assets/icons/wind.png"/>
                <p style={{marginTop:'20px'}}>Wind: {nextDay.list.wind.speed} Knots</p>
               
            </Col>
            </Row>
            
        </Container>
        </div> 

    )

}