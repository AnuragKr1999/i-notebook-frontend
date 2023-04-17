import React, {useContext} from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote} = context
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
                {/* Delete icon */}
                <i className="fa-solid fa-trash-can mx-2" onClick={() => {deleteNote(note._id)}}></i>
                {/* Edit icon */}
                <i onClick={() => {updateNote(note)}} className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
          </div>
          <p className="card-text">
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
