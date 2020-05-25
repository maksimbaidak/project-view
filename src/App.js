import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux'
import {autoLogin} from './store/actions/auth';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render(){
    let routes;
    if (this.props.isLogin) {
      routes = (
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      )
    } else{
      routes = (
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/signin" />
        </Switch>
      )
    }
    return(routes)
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.auth.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
