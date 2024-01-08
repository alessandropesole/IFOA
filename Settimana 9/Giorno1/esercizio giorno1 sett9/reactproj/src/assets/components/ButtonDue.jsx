import React from "react"
import { useState } from "react"

const ButtonComponentDue = () => {
    const [buttonText] = useState('prova 2')  
    return <button>{buttonText}</button>
}
export default ButtonComponentDue