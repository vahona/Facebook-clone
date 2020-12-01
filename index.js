import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context'

import App from './App'


ReactDOM.render(
    <ContextProvider>
        <Router>
        <App />
        </Router>
    </ContextProvider>,
     document.getElementById('root'))



     
//  {
//         "id" : "2",
//         "username": "Dinna",
//         "like": 1,
//         "comment" : { "username" : "kkkkkk", "comment": "sdksdskk",  "date_coments": "12-05-20",},
//         "posttext" : "ksjkdsflkdsl",
//         "postimage" : "https://picsum.photos/id/1015/694/520.jpg",
//         "created_date": "13-05-20",
//         "update_date": "23-09-20"

    
//     }