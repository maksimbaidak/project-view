import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Note.css'

import {openNote} from '../../store/actions/editor';

class Note extends Component {

  state = {
    note: this.props.note
  }

render(){
    return(
      <div
        className="note"
        key={this.props.id}
        onClick={() => this.props.openNote(this.state.note)}
      >
        <div className="title">
          <h2>{this.props.note.note_id}</h2>
        </div>
        <p>{this.props.note.contents}</p>
      </div>
    )
}
}

function mapDispatchToProps(dispatch){
  return{
    openNote: (note) => dispatch(openNote(note))
  }
}

export default connect(null, mapDispatchToProps)(Note);
