import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const s1 = {
        "name": "Tom",
        "class": "1A"
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name": "Tommy",
                "class": "10A"
            })
        }, 1000)
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;