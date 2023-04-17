import React from "react";

const NoteItem = (props) => {
  const { title, description } = props.note;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items justify-content-between">
            <h5 className="card-title">{title}</h5>
            <div>
                <i className="fa-solid fa-trash-can mx-2"></i>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
          </div>
          <p className="card-text">
            {description} Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Autem ipsum qui accusamus recusandae quia repellendus cum
            magnam fuga magni sit atque ullam officia in porro rerum, deleniti
            repudiandae minus tenetur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
