import { Component } from "react";
import NewComment from "./NewComment";
import SingleComment from "./SingleComment"

class ClassCommentSection extends Component {
    state={
        comments : [],
        isLoading : false,
        isError : false
    }

    componentDidMount = async() => {
    try {
        const res = await fetch ('https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDQ5ODEyMTksImV4cCI6MTcwNjE5MDgxOX0.fuIWdAzctYUeSlgeHNawtSsGBINhsBDDHaKAaIQKfZ8',
            },
        })
        if (res.ok) {
            let data = await res.json()
           this.setState({comments: data})
        } else {
            console.log('errore');
        }
    } catch (error) {
        console.log(error);
    }
}
        divStyle = {
            backgroundColor: 'grey',
            padding: '10px',
            border: '1px solid black'
        }
        
        render() {
            return (
                <>
                <div style={divStyle} className="rounded">
                    <h3>Commenti</h3>
                   { comments.map ((comment, index) => 
                        <SingleComment comment={comment} key={index} />
                   )}
                </div>
                <NewComment />
                </>
            )
        }
}
export default ClassCommentSection