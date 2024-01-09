import {Component} from "react";

class ImageClass extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <img src= {this.props.image} alt = {this.props.alt} width="400px" height="300px" />
    )}
}
export default ImageClass