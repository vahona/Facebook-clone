import React, { children, useEffect, useState } from 'react'
import Facebook from './facebook.json'

const Context = React.createContext()

function ContextProvider({children}) {

    const [facebook, setFacebook] = useState(Facebook);
    const [comment, setComment] = useState([])
    
    console.log(facebook);

     function addComments(e) {
        e.preventDefault()
        console.log(e.target.value);

     }

     return (
        <Context.Provider value={{
            facebook,
            setFacebook,
            addComments,
            comment, 
            setComment
             }}>
            {children}
        </Context.Provider>
    )

}


export { ContextProvider, Context };