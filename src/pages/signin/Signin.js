import React, {Component} from 'react';

import {connect} from 'react-redux';
import {signIn} from '../../store/actions/auth';

import './Signin.css';
import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';

class Signin extends Component {

  state = {
    nick: '',
    pass: ''
}

onChangeHandler(event, inputName){
  if(inputName === 'nick'){
    this.setState({
      nick: event.target.value
    })
  }
  if(inputName === 'pass'){
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
      <div className="signin">
        <Input onChange={event => this.onChangeHandler(event, 'nick')}/>
        <Input onChange={event => this.onChangeHandler(event, 'pass')}/>
        <Button onClick={this.registerHandler}>
            Sign in
        </Button>
        <Button onClick={() => this.props.history.push('/signup')}>
            Sign up
        </Button>
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
