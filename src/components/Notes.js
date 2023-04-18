import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
  };

  const handleClick = (e) => {
    editNote(note._id, note.title, note.description, note.tag);
    refClose.current.click();
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        className="btn btn-primary d-none"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="titleHelp"
                    placeholder="Enter Title"
                    onChange={onChange}
                    value={note.title}
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
                    placeholder="Enter Description"
                    onChange={onChange}
                    value={note.description}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    placeholder="Enter Tag"
                    onChange={onChange}
                    value={note.tag}
                  />
                </div>
              </form>
              {note.title.length < 3 ? <p className="text-danger">Minimum title length must be 3 characters</p>:null}
            </div>
            
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                disabled={note.title.length < 3}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 mx-1">
        <h3>Your notes</h3>
        {notes.length === 0
          ? "No notes to display. Please add a note"
          : notes.map((note) => {
              return (
                <NoteItem key={note._id} updateNote={updateNote} note={note} />
              );
            })
        }
      </div>
    </>
  );
};

export default Notes;
