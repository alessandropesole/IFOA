import { Button } from "react-bootstrap";
import FantasyBooks from "../../json/fantasy.json";
import HistoryBooks from "../../json/history.json";
import HorrorBooks from "../../json/horror.json";
import RomanceBooks from "../../json/romance.json";
import SciFiBooks from "../../json/scifi.json";

const BookLists = ({setBook}) => {
    return (
    <div>
        <Button variant="outline-primary" className="mx-3" onClick = {() => setBook(FantasyBooks)}>Fantasy</Button>
        <Button variant="outline-primary" className="mx-3" onClick = {() => setBook(HistoryBooks)}>History</Button>
        <Button variant="outline-primary" className="mx-3"  onClick = {() =>setBook(HorrorBooks)}>Horror</Button>
        <Button variant="outline-primary" className="mx-3" onClick = {() => setBook(RomanceBooks)}>Romance</Button>
        <Button variant="outline-primary" className="mx-3" onClick = {() => setBook(SciFiBooks)}>SciFi</Button>
    </div>
)}

export default BookLists