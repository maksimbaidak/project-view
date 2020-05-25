import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Note = props => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{this.props.note.id}</h5>
        <p className="card-text">{this.props.note.text}</p>
      </div>
    </div>
  )
}

export default Note;
