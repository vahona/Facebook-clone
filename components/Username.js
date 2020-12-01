import React from "react"

function Username() {
    return (
        <>
            <div>
                Options: 
            </div>
            <form>
                <label>
                    Username
                    <input />
                </label>
                 <label>
                    Profile picture
                    <input />
                </label>
                <button>
                    save
                </button>
            </form>
        </>
    )
}

export default Username