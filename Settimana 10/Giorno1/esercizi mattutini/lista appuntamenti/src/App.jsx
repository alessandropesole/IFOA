import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [appointments, setAppointments] = useState(0)

  const reloadList= () => {
    setAppointments(data)
  }

  return (
    <>
      <section>
        <div className="container">
          <h2>Prossimi appuntamenti</h2>
          <div className='people-list'>
          
          </div>
          <div className='btn-group'>
            <button oncClick={reloadList}>Ricarica Lista</button>
            <button onClick={() => setAppointments([])}>Cancella Tutto</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
