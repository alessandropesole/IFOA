
import { useLocation } from "react-router-dom"
import CardCity from "../components/CardCity"


const Result = () => {
    const location = useLocation()
    const searchCity = new URLSearchParams(location.search).get('searchedCity')
    
    return (
        <>
        <div style={{marginTop:'15vh'}}className="d-flex justify-content-center">
           <CardCity city= {searchCity}> </CardCity>
           </div>
        </>
    )
    
}

export default Result