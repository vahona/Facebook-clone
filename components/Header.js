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

const LinkStyled = styled(Link)`

  text-decoration: none;
  font-family: Roboto;
  color: gray

`

function Header() {
    return(
        <div>
                <nav>
                <OrderList>
                    <List><LinkStyled to="/Feed">Feed</LinkStyled></List>
                    <List><LinkStyled to="/Addpost">Add a post </LinkStyled></List>
                    <List>
                        <LinkStyled to="/Username"> UserName </LinkStyled>
                        <Border src="https://picsum.photos/id/1018/694/520.jpg"/>
                    </List> 
                </OrderList>
             </nav>
        </div>

    )
}

export default Header