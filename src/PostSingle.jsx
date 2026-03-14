export default function PostSingle({post}){
    console.log(post);
    const {title, body}=post
    return(
        <div className="card">
<p>Title:{title}</p>
<p>Body:{body}</p>
        </div>
    )
}