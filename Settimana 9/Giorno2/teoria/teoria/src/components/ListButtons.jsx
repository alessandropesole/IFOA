import FantasyBooks from '../../json/fantasy.json'
import HistoryBooks from '../../json/history.json'
import HorrorBooks from '../../json/horror.json'
import RomanceBooks from '../../json/romance.json'
import SciFiBooks from '../../json/scifi.json'
import Button from 'react-bootstrap/Button'


const ListButtons = ({setList}) => {
    return (
        <div className="text-center py-4">
            <Button variant="outline-warning" onClick = {() => setList(FantasyBooks) }>Fantasy</Button>
            <Button variant="outline-warning" onClick = {() => setList(HistoryBooks) }>History</Button>
            <Button variant="outline-warning" onClick = {() => setList(HorrorBooks) }>Horror</Button>
            <Button variant="outline-warning" onClick = {() => setList(RomanceBooks) }>Romance</Button>
            <Button variant="outline-warning" onClick = {() => setList(SciFiBooks) }>SciFi</Button>
        </div>
    )
}
export default ListButtons