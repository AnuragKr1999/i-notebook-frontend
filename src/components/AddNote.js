import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: '', description: '', tag: ''})

  const handleClick = (e) => {
    e.preventDefault()
    addNote(note)
  }

  const onChange = (event) => {
    setNote({...note, [event.target.name]: event.target.value})
  }
  
  return (
    <div className="container my-3">
      <h3>Add a Note</h3>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={onChange}
          />
          <small id="titlelength" className="form-text text-muted">
            Minimum length of title must be 3 characters
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Description"
            onChange={onChange}
          />
        </div>
        <small id="descriptionlength" className="form-text text-muted">
            Minimum length of description must be 3 characters
          </small>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter Tag"
            onChange={onChange}
          />
        </div>
        
        <button onClick={handleClick}type="submit" className="btn btn-success mt-3">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
