import React, {Component} from 'react'
import './Signup.css';
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/auth';
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/button/Button'

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
      <div className="signup">
      <Input onChange={event => this.onChangeHandler(event, 'nick')}/>
      <Input onChange={event => this.onChangeHandler(event, 'pass')}/>
      <Button onClick={this.registerHandler}>
        Sign up
      </Button>
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
