import { useState } from "react";
import { Button } from "react-bootstrap";


const FeedbackForm = () => {
    const [form, setForm] = useState({
        domandaUno: '',
        domandaDue: '',
        domandaTre: ''
    })

    //const [selectedValue, setSelectedValue] = useState(null);

   /* const handleRadioChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        console.log('Valore del radio button selezionato:', value);
      };*/

    const handlerSubmit = () => {
        console.log(form);
    }

    return (
        <>
            <div style={{ marginBottom: '100px', backgroundColor:'rgba(28, 47, 47, 0.112)' }} className="p-4">
                <h3>Lascia una recensione</h3>
                <form>
                    <label className="my-4 me-3"> Pensi che la nostra offerta di libri sia soddisfacente? </label>
                        <input type="text" value={form.domandaUno} onChange={(e) => setForm({ ...form, domandaUno: e.target.value })} />
                    <br />
                    <label className="me-3">  Pensi che il prezzo dei nostri prodotti sia equlibrato? </label> 
                        <input type="text" value={form.domandaDue} onChange={(e) => setForm({ ...form, domandaDue: e.target.value })} />
                    <br />
                    <fieldset className="mt-4">
                        <div>
                        <p>Come valuti la tua esperienza sul nostro Store?</p>
                            <input className="me-1" type="radio" id="radio1" name="contact" value={form.domandaTre} onChange={() => setForm({ ...form, domandaTre: 'Ottima' })}/>
                            <label className="me-3">Ottima</label>

                            <input className="me-1" type="radio" id="radio2" name="contact" value={form.domandaTre} onChange={() => setForm({ ...form, domandaTre: 'Buona' })}/>
                            <label className="me-3">Buona</label>

                            <input className="me-1" type="radio" id="radio3" name="contact" value={form.domandaTre} onChange={() => setForm({ ...form, domandaTre: 'Pessima' })}/>
                            <label className="me-3">Pessima</label>
                        </div>
                    </fieldset>
                </form>
                <Button type='button' variant="outline-primary" className="mt-4" onClick={handlerSubmit}>Invia</Button>
            </div>
        </>
    )
}

export default FeedbackForm