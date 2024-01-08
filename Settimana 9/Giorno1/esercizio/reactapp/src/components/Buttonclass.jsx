import {Component} from 'react'

class ButtonClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count //abbiamo usato qui la prop 
        }
    }

    incrementCount= () => {
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        })
     }
    render () {
        return (
            <button onClick={this.incrementCount}>
                il conteggio del bottone è {this.state.count}
        </button>
        )
    }
}
export default ButtonClass