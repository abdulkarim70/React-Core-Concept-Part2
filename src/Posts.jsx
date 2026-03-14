import { use } from "react"
import PostSingle from "./PostSingle"
export default function Posts({postsPromise}){
const posts=use(postsPromise)
    return(
        <div>
<h3>All Post:{posts.length}</h3>
{ posts.map(post=> <PostSingle post={post}></PostSingle>)}
        </div>
    )
}