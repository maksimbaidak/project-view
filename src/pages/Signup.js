import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../store/actions/auth';

class Signup extends Component {

    state = {
      nick: '',
      pass: ''
  }

  onChangeHandler(event, controlName){
    if(controlName === 'nick'){
      //TODO validation
      this.setState({
        nick: event.target.value
      })
    }
    if(controlName === 'pass'){
      //TODO validation
      this.setState({
        pass: event.target.value
      })
    }
  }

  registerHandler = () => {
    try{
      this.props.signUp(this.state.nick, this.state.pass);
    } catch(err){
      console.log(err);
    }
  }

  render(){
    return(
      <div style={{marginTop: '40px'}} className="row justify-content-md-center">
        <div className="col col-lg-2">
          <div className="form-group">
              <input  type="nickname"
                      placeholder="Nickname"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={event => this.onChangeHandler(event, 'nick')}
                      aria-describedby="emailHelp">
              </input>
          </div>
          <div className="form-group">
            <input  type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={event => this.onChangeHandler(event, 'pass')}
                    id="inputPassword">
            </input>
          </div>
          <div className="row">
            <div className="col">
              <button   type="button"
                        onClick={this.registerHandler}
                        className="btn btn-primary btn-block">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (nick, pass) => dispatch(signUp(nick, pass))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
