import {Col,  Row } from "react-bootstrap"


const CardsNextDays = ({nextDay}) => {

 

    return ( 
        <>
            <Row className="d-flex align-items-center mb-3">
            <Col>
            <img width='140px' className="ms-5" src={`./src/assets/icons/${nextDay.weather[0].icon}.png`} />
            </Col>
            <Col>
            <div>
            <h3 className=" ">{nextDay.main.temp.toFixed(0)}°</h3>
            </div>
            <div >
            <h5 className="m-0">{nextDay.dt_txt.slice(0, 10)}</h5> 
            <h5 className="m-0">{nextDay.dt_txt.slice(11, 16)}</h5> 
            </div>
            </Col>
            </Row>
      
            </>
    )
}
export default CardsNextDays