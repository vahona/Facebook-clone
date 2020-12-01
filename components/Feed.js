import React, { useContext,useState } from 'react'
import {Context} from '../Context'
import styled from "styled-components"

const Image = styled.img`
    width: 40%
`

const Images = styled.img`
    width: 20%
`

const Button = styled.div`
  display: flex;
  
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

function Feed({children}) {

    const { facebook, setFacebook,  addComments, comment, setComment} = useContext(Context)
    

    const facebookList = facebook.map((face) => {
        return (
            <div key={face.id}>
                <div>
                   {face.username}
                </div>
                <div>
                   {face.created_date}
                </div>
                <div>
                   {face.posttext}
                </div>
                <Image className="image" src={face.postimage} />
                {comment.map((comm) => {
                    return (
                        <ul>
                            <Lists>
                                <Images src={comm.profile} /> {comm.username}  {comm.comment}
                            </Lists>
                       </ul>
                    )
                })}
                
                <Button>
                    <Button1>👍</Button1>
                    <p></p>
                </Button>
            </div>
        )
    })

    return (
        <div>
            {facebookList}
            <Form>
                <Input type="text" onChange={addComments} placeholder="Add a comment" />
                <Buttons >Post</Buttons>
            </Form>
        </div>
    )
}

export default Feed