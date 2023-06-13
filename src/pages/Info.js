import InfoPage from "../components/InfoPage";
import {useEffect, useState} from "react";

const Info = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => {
                setComments(response.slice(0,6));
            })
    }, [])

    return <InfoPage>
        <>
            <h1>Information about building</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum delectus eos explicabo fugit incidunt iure numquam perferendis placeat vel!</p>
            <div className="comments">
                {comments.map(comment => {
                    return <div style={{border: '3px solid red'}} key={comment.id}>
                        <span>{comment.email}</span>
                        <p>{comment.body}</p>
                    </div>
                })}
            </div>
        </>
    </InfoPage>
}

export default Info