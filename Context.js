import React, { children, useEffect, useState } from 'react'
import Facebook from './facebook.json'

const Context = React.createContext()

function ContextProvider({children}) {

    const [facebook, setFacebook] = useState(Facebook);
    const [comment, setComment] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [userLike, setUserLike ] = useState(0)
    const [currentUser, setcurrentUser] = useState({
        id : "12",
        profile: "https://picsum.photos/id/1015/694/520.jpg",
        username: "Sugi", 
        liked: false

    })

    console.log(comment);
    console.log(facebook);

    function addComments(e) {
        e.preventDefault()
        setComment([...facebook, setInputValue])
        console.log(e.target.value);

     }

    function SubmitComment(e) {
        e.defaultDefault()
        setComment( firstIpnut => firstIpnut.concat({value: inputValue}))
        setInputValue("")
     }

     // Function for likes

    function liked(id) {

        const posts = facebook.map(post => {
            if(facebook.id === id) {
                return {
                    ...post,
                    like: [{
                        liked: !post.like[0].liked
                    }]
                };
            }

            return post
        });
        setFacebook(posts)
            }

            function userLikeFunc(e) {
                const user = facebook.some(post => currentUser.id === post.id)
                // const newId = facebook.find()
                console.log(user);
                if(!user) {
                    const newlike = {
                        ...facebook,
                        like: [currentUser,]
                    }
                }
            }

    return (
        <Context.Provider value={{
            facebook,
            setFacebook,
            addComments,
            comment, 
            setComment,
            liked,
            setInputValue,
            value: inputValue,
            SubmitComment,
             userLikeFunc
             }}>
            {children}
        </Context.Provider>
    )

}

export { ContextProvider, Context };









//    cosnt [state, dispatch] = useReducer(
//         (state, action) => {
//             switch (action.type) {
//                 case "ADD_COMMENT" : {
//                     const newPost = state.comments.map(post => {
//                         if(post.id === action.id) {
//                             return {
//                                 ...post,
//                                 comment: [...post.comment, action.comments]
//                             };
//                         }
//                         return post
//                     });
//                     return {
//                         ...state,
//                         comments: newPost
//                     }
//                 }
//             }
//         },
//         {
//           comments: [],

//         }
//     );