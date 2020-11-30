
import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import Addpost from "./components/Addpost"
import Feed from './components/Feed'
import Homepage from './components/Homepage'
import Username from './components/Username'


function App() {
    return (
    <div>
        <h1>Facebook clone</h1>
        <nav>
            <ul>
                <li><Link to="/Feed">Feed</Link></li>
                 <li><Link to="/Addpost">Add a post </Link></li>
                <li><Link to="/Username"> UserName </Link></li> 
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
             <Route path="/Feed">
                <Feed />
            </Route>
             <Route path="/Addpost">
                <Addpost />
            </Route>
             <Route path="/Username">
                <Username />
            </Route>
        </Switch>
        
    </div>

    )
    
}

export default App