import React, {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux'
import {autoLogin} from './store/actions/auth';
import Layout from './pages/Layout'
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

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
    return(
      <Layout>
        { routes }
      </Layout>)
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
