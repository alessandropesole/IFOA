import SingleBook from "./SingleBook";
import FantasyBook from "../../json/fantasy.json"
import { useState } from "react";
import { useEffect } from "react";

const BookList = () => {
    const [list, setList] = useState (FantasyBook);
    const [listaClone, setListaClone] = useState(FantasyBook)

    function SearchQuery(event) {
        let value = new RegExp(event.target.value, 'i') 
        const firstList = list
        const result = firstList.filter((book) => {
            return value.test(book.title)
        })
        setListaClone(result)
    }

    useEffect(() => {
        setListaClone(list)
    }, [list])
    
    return (
        <>
        <input type="text"  placeholder="cerca un libro" onChange={SearchQuery} />
        <div className="d-flex justify-content-between flex-wrap">
            {listaClone.map((book) => 
                <SingleBook book={book} key={book.asin} />
            )}
            </div>
        </>
    )
}

export default BookList