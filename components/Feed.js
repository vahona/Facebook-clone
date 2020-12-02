import React, { useContext,useState } from 'react'
import {Context} from '../Context'
import styled from "styled-components"
 import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

    const Image = styled.img`
        width: 100px
    `

    const Images = styled.img`
        width: 40px;
        float: left;
        margin: 1rem;
        margin-left: 0;
        border-radius: 50%
        
    `

    const Button = styled.div`
    display: flex;
    
    `
    const Div = styled.div`
    border-radius: 10px;
    box-shadow:  10px 5px 5px 10px gray;
    padding: 3rem;
    margin: 1rem;
    font-family: Roboto

    
    `

    const Form = styled.form`
        display:flex;
        flex-direction:row;
        border:1px solid grey;
        padding:2px;
        border-radius: 24px;
        background-color: gray;
    `

    const Buttons = styled.button`
        border:1px solid blue;
        background:white;
        border-radius: 24px;

    `
    const OrederList = styled.ul`
    padding: 0

    `

    const Button1 = styled.button`
        background-color: white;
        border: none
    `

    const Input = styled.input`
        flex-grow:2;
        border:none;
        border-radius: 24px

    `

    const Lists = styled.li`
    list-style: none
    `

    const Article = styled.article`
    display: flex;
    margin: 1rem

    `
    const Username = styled.div`

    margin-right: 70%

    `
    const Icons = styled.i`
    color: blue
    `

    const IconsBlue = styled.i`
    color: blue
    `

    const Liked = styled.div`
    display: flex
`

    function Feed({children}) {

    const { facebook,
            setFacebook, 
            addComments, 
            liked,
            inputValue,
            setInputValue,
            SubmitComment,
             userLikeFunc
        } = useContext(Context)

    const facebookList = facebook.map((face) => {
        return (
            <div key={face.id}>
                <Article>
                    <Username>
                        {face.username}
                    </Username>
                    <div>
                        {face.created_date}
                    </div>
                </Article>
                <div>
                   {face.posttext}
                </div>
                <Image className="image" src={face.postimage} />
                <Liked>
                    <button onClick={ userLikeFunc}>
                    <Icons onClick={() => liked(face.like[0].id) }>
                        {face.like[0].liked ? <FaRegThumbsUp /> : <FaThumbsUp /> }
                    </Icons>
                    </button>
                <p>
                    {!face.like[0].liked ? face.numberliked + 1 : face.numberliked}
                </p>
                </Liked> 
                <OrederList>
                    <Lists>
                        <Images src={face.comments[0].profile} /> 
                        {face.comments[0].comment} 
                    </Lists>
                </OrederList>
                
            </div>
        )
    })

    return (
        <Div>
            {facebookList}
            <Form>
                <Input type="text" value={inputValue} onChange={addComments} placeholder="Add a comment" />
                <Buttons onClick={SubmitComment} >Post</Buttons>
            </Form>
        </Div>
    )
    }

export default Feed