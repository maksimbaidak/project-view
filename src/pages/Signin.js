import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {signIn} from '../store/actions/auth';

class Signin extends Component {

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
    this.props.signIn(this.state.nick, this.state.pass);
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
                    id="exampleInputPassword1">
            </input>
          </div>
          <div className="row">
            <div className="col">
              <button   type="button"
                        className="btn btn-primary btn-block"
                        onClick={this.registerHandler}>
                Send
              </button>
            </div>
            <div className="col">
              <Link to="/signup">
                <button   type="button"
                          style={{float: 'right'}}
                          className="btn btn-primary btn-block">
                  Sign up
                </button>
              </Link>
            </div>
           </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (nick, pass) => dispatch(signIn(nick, pass))
  }
}

export default connect(null, mapDispatchToProps)(Signin)
