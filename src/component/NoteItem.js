import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (

        <div className='col-md-3'>
            <div className='card my-3'>
                <div className='card-body'>
                    <div className='d-flex align-items-center'>
                        <h4 className='card-title'>{note.title}</h4>
                        <i className="far fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully", "success");}}></i>
                        <i className="far fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <div className='card-text'>{note.description}</div>
                </div>
            </div>
        </div>

    )
}

export default NoteItem