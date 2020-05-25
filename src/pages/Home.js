import React, {Component} from 'react';
import Note from '../components/Note';
import {connect} from 'react-redux'
import {fetchNotes} from '../store/actions/notes';
import {logOut} from '../store/actions/auth';

class Home extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  logoutHandler = () => {
    this.props.logOut();
  }

  renderNotes(){
    return this.props.notes.map(note => {
      return(
        <div className="col">
          {note.note_id}
        </div>
      )
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row row-cols-4">
          <button   type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.logoutHandler}>
            Log Out
          </button>
        </div>
        <div className="row row-cols-10">
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    notes: state.notes.notes
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchNotes: () => dispatch(fetchNotes()),
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
