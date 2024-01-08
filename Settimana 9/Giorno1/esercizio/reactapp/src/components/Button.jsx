import { useState } from "react"

const Button= (props) => {

   const [count, setCount] = useState(props.count) //useState è un hook con props.count stiamo passando una prop dichiarata in App.jsx

   return (<button style={{padding:'10px'}} onClick= {() => setCount((count) => count + 1)}>
          il conteggio è {count} 
        </button>
   )
}
export default Button