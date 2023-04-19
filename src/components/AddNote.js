import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const {showAlert} = props
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: '', description: '', tag: ''})

  const handleClick = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({title: '', description: '', tag: ''})
    showAlert('Added successfully', 'success')
  }

  const onChange = (event) => {
    setNote({...note, [event.target.name]: event.target.value})
  }
  
  return (
    <div className="container my-3">
      <h3>Add a Note</h3>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={onChange}
            required
            minLength={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            placeholder="Enter Description"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            placeholder="Enter Tag"
            onChange={onChange}
          />
        </div>
        {/* {note.title.length < 3 ? <p className="text-danger">Minimum title length must be 3 characters</p>:null} */}
        <button disabled={note.title.length < 3} onClick={handleClick}type="submit" className="btn btn-success mt-3">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
