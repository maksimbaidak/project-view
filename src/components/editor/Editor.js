import update from 'immutability-helper';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {saveNote} from '../../store/actions/editor';

import './Editor.css'
import Button from '../UI/button/Button.js';

class Editor extends Component {

  state = {
    note: this.props.note
  }

  onChangeHandler(event){
    let note =
          update(this.state.note,
                  {$merge: {contents: event.target.value}});
    this.setState({note});
    console.log(this.state.note.contents);
  }

  render(){
    return (
      <div className="edit">
        <textarea
          defaultValue={this.state.note.contents}
          onChange={event => this.onChangeHandler(event)}
        />
        <Button
          type="icon"
          onClick={() => this.props.saveNote(this.state.note)}
        />
      </div>
      )
    }
  }

function mapStateToProps(state){
  return{
    note: state.editor.note
  }
}

function mapDispatchToProps(dispatch){
  return{
    saveNote: (note) => dispatch(saveNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
