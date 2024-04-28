import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
const Post = ({post}) => {
  const {delPost} = useContext(PostList);
    return (
        <>
            <div className="card post-card" >
  <img src="https://media.licdn.com/dms/image/D4D03AQFPCwHL6R__FQ/profile-displayphoto-shrink_800_800/0/1705475525023?e=1719446400&v=beta&t=PJf1562JuJO34eUWsoMdyfunYrvFPbKxsTWHwlkGXM4" className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => {delPost(post.id)}}>
    {/* {post.likes} */}
    <MdDelete />
    
  </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}

    <div className="alert alert-success likes" role="alert">
  Liked by {post.reactions}
</div>

  </div>
</div>
        </>
    )
}

export default Post;