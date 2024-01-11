const SingleComment = ({comment}) => {
    return(
        
        <div className="d-flex">
        <div>
            <small>{comment.rate} {comment.comment}</small>
        </div>
        <div>
        <i class="bi bi-trash-fill"></i>
        </div>
        </div>
        
    )
}
export default SingleComment