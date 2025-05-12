import { useEffect, useState} from "react"

function Post({posts, selectedPost, setSelectedPost}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        if(selectedPost === posts.id){
        fetch (`https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`)
        .then((res) => res.json())
        .then((data) => setComments(data))
        .catch((err) => console.warn(err))
        }
    }, [selectedPost])
    
    return <>
    <div className="post-card">
        <span className="card-title"> {posts.title} </span>
        <p> {posts.body} </p>
        <span className="comment-section" onClick={() => setSelectedPost(posts.id)}>Open Comments</span>
    </div>
    {selectedPost === posts.id && (
        <div className="comment-wrapper">
        {comments.map((c) =>
            <div className="comment post-card">
            <span className="comment-name">{c.name}</span>
            <p> {c.body} </p>
        </div>
        )}
    </div>
    )
    }
    
    </>
}
export default Post