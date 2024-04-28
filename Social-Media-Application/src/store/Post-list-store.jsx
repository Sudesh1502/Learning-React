import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
    postList: [],
    addPost : ()=>{},
    delPost : ()=>{},
    state: false,
});
//=============================================================================

const reducerFunction = (curPostList, action) => {
    let newPostList = curPostList;
    if(action.type === 'DELETE'){
        newPostList = curPostList.filter((post)=>post.id !== action.payload.postId)
    } else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...curPostList]
    } else if (action.type === 'massAddition'){
        newPostList = action.payload.posts;
    }
    return newPostList;
}

//=============================================================================
const PostListProvider = ({children}) => { 
    const [postList, dispatchPostList]=useReducer(reducerFunction, DEFAULT_POSTLIST);

    
    const addPost = (post) => {
       
        
        dispatchPostList({
            type:'ADD_POST',
            payload: post,
        })
    }


    const massAddition = (posts) => {
        
        
        
        dispatchPostList({
            type:'massAddition',
            payload: {
                posts
            }
        })
    }



    const delPost = (postId) => {
        dispatchPostList({
            type:'DELETE',
            payload: {
                postId,
            },
        })       
    }



    const [state, setState] = useState(false);
    useEffect(()=>{
        setState(true);

        const controller = new AbortController;
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', { signal })
        .then(res => res.json())
        .then(data => {
            massAddition(data.posts);
            setState(false);
        });

        return () => {
            
            controller.abort();
        }
        
    },[]);

//=============================================================================
    return (
        <PostList.Provider value={{postList, addPost, delPost, massAddition}}>
            {children}
        </PostList.Provider>
    )
}

const DEFAULT_POSTLIST = [];
//     {
//     id: "1",
//     location: "Pune",
//     caption: "I know how to rule my life, please don't ruin it....STAY AWAY",
//     likes: 0,
//     userId: "sudesh1502",
//     tags: ['Travel', 'Focus','Evileye']
// },
// {
//     id: "2",
//     location: "Pune",
//     caption: "I know how to rule my life, please don't ruin it....STAY AWAY",
//     likes: 0,
//     userId: "sudesh1502",
//     tags: ['Travel', 'Focus','Evileye']
// },
// {
//     id: "3",
//     location: "Pune",
//     caption: "I know how to rule my life, please don't ruin it....STAY AWAY",
//     likes: 0,
//     userId: "sudesh1502",
//     tags: ['Travel', 'Focus','Evileye']
// },
// {
//     id: "4",
//     location: "Pune",
//     caption: "I know how to rule my life, please don't ruin it....STAY AWAY",
//     likes: 0,
//     userId: "sudesh1502",
//     tags: ['Travel', 'Focus','Evileye']
// }
// ];
export default PostListProvider;