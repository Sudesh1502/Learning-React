import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const navigate = useNavigate();
  const userIdRef = useRef();
  const bodyRef = useRef();
  const titleRef = useRef();
  const tagsRef = useRef();
  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = userIdRef.current.value;
    const cap = bodyRef.current.value;
    const loc = titleRef.current.value;
    const tag = tagsRef.current.value.split(" ");
    

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: loc,
        body: cap,
        reactions: 0,
        userId: id,
        tags: tag
    })
    })
    .then(res => res.json())
    .then(data => {
      addPost(data);
      navigate("/")
  });


    userIdRef.current.value = '';  
    bodyRef.current.value = '';
    titleRef.current.value = '';
    tagsRef.current.value = '';
    alert('Post Uploaded');
  }

    return (
        <>
            <form className="createpost" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="UserId" className="form-label">Enter UserId</label>
    <input type="text" ref={userIdRef} className="form-control" id="UserId" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="Caption" className="form-label">Caption</label>
    <textarea type="text" ref={bodyRef} className="form-control"  id="Caption"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Location" className="form-label">Title</label>
    <input type="text" ref={titleRef} className="form-control" id="Location"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Tags" className="form-label">Tags</label>
    <input type="text" ref={tagsRef} className="form-control" id="Tags"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Confirm to post</label>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
        </>
    )
}
export default CreatePost;