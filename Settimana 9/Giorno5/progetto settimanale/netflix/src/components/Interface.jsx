import { Dropdown } from "react-bootstrap"
import '../components/Custom.css'


const Interface = () => {
    return (
        <div className="d-flex justify-content-between" style={{ margin: '2vh 0.8vw 2vh 0.8vw' }}>
            <div className="d-flex align-items-center">
                <h1 style={{ color: 'white' }}>Tv Shows</h1>
                <Dropdown className="mx-3">
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Genres
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-dark" id="drop-genres">
                        <Dropdown.Item href="#/action-1" className="text-white">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="text-white">Drama</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="text-white">Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <button className="btn  btn-outline-secondary px-4 mx-2  "><svg xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
                </svg>
                </button>
                <button className="btn btn-outline-secondary px-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-grid" viewBox="0 0 16 16">
                        <path
                            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Interface