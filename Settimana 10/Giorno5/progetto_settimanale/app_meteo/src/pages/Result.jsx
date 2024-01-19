
import { useLocation } from "react-router-dom"
import CardCity from "../components/CardCity"


const Result = () => {
    const location = useLocation()
    const searchCity = new URLSearchParams(location.search).get('searchedCity')
    
    return (
        <>
           <CardCity city= {searchCity}> </CardCity>
        </>
    )
    
}

export default Result