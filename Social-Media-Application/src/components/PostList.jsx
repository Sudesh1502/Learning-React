import { useContext } from "react";
import Post from "./Post"
import {PostList as PostListData} from "../store/Post-list-store";
import WellcomeMessage from "./WellcomeMessage";
import Loader from "./Loader";

const PostList = () => {
    const {postList, state} = useContext(PostListData);
   
        

        
    
   
    return (
        <>
        {state && <Loader/>}
        {!state && postList.length == 0 && <WellcomeMessage />}
        {!state && postList.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
        
        </>
    )
}
export default PostList;