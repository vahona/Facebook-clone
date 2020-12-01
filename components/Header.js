import React from 'react'
import { Link, Switch, Route } from "react-router-dom"
import styled from "styled-components"

const Border = styled.img`
        border-radius: 50%;
        width: 40px
`

const OrderList = styled.ul `
  display: flex;
  
`

const List = styled.li`
   margin: 1rem;
   list-style: none
`


function Header() {
    return(
        <div>
                <nav>
                <OrderList>
                    <List><Link to="/Feed">Feed</Link></List>
                    <List><Link to="/Addpost">Add a post </Link></List>
                    <List>
                        <Link to="/Username"> UserName </Link>
                        <Border src="https://picsum.photos/id/1018/694/520.jpg"/>
                    </List> 
                </OrderList>
             </nav>
        </div>

    )
}

export default Header