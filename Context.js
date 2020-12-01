import React, { children, useEffect, useState } from 'react'
import Facebook from './facebook.json'

const Context = React.createContext()

function ContextProvider({children}) {

    const [facebook, setFacebook] = useState(Facebook);
    const [comment, setComment] = useState([])
    const [inputValue, setInputValue] = useState("")

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
                        liked: !post.like[0].number
                    }] 
                    
                };
            }

            return post
        });
        setFacebook(posts)

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
            SubmitComment
             }}>
            {children}
        </Context.Provider>
    )

}


export { ContextProvider, Context };