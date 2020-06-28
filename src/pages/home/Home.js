import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchNotes} from '../../store/actions/notes';

import './Home.css';
import Modal from '../../components/modal/Modal';
import Note from '../../components/note/Note';
import Editor from '../../components/editor/Editor';
import Masonry from '../../components/masonry/Masonry';
import Navbar from '../../components/navbar/Navbar';

class Home extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  render(){
    let brakePoints = [450, 600, 850, 1000];
    return(
      <div className="home">
        <Modal isOpen={this.props.isOpen}>
          <Editor/>
        </Modal>
        <Navbar/>
        <Masonry brakePoints={brakePoints}>
          {this.props.notes.map((note, id) => {
            return(
              <Note note={note} id={id}/>
            )
          })}
        </Masonry>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    notes: state.notes.notes,
    isOpen: state.editor.isOpen,
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
