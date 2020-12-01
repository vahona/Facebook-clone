import React from "react"

function Addpost({childrean}) {
    return (
        <>
        <p>
            new post: 
        </p>
        <textarea  rows="5" cols="33">
            Say what in your mind
        </textarea>
        <form>
            <label>Picture url: 
            <input />
            </label>
            <button>
                Post
            </button>
            </form>
        </>
    )
}

export default Addpost