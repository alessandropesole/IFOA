import './App.css'

import ButtonComponent from './assets/components/Button'
import ButtonComponentDue from './assets/components/ButtonDue'
import ImageClass from './assets/components/Image'

function App() {


  return (
    <>
      <div>
        <ButtonComponent buttonText="prova 1" />
        <ButtonComponentDue />
      </div>
      <div>
      <ImageClass image="https://i.imgflip.com/1c397d.jpg?a473400" alt="immagine meme" />
      </div>
      
    </>
  )
}

export default App
