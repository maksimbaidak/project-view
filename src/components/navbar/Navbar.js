import React from 'react';
import {connect} from 'react-redux';

import {logOut} from '../../store/actions/auth';
import {openEditor} from '../../store/actions/editor';

import './Navbar.css';
import Button from '../UI/button/Button.js';
import Input from '../UI/input/Input.js';

const Navbar = props => {

    return(
        <div className="navConteiner">
          <div className="menuButton">
            <Button
              type="icon"
              onClick={null}
            />
          </div>
          <div className="searchInput">
            <Input
              type="search"
            />
          </div>
          <div className="menuButton">
                <Button
                  type="icon"
                  onClick={() => props.openEditor()}
                >
                  <p>add</p>
                </Button>
                  </div>
                <div className="menuButton">
                <Button
                  type="icon"
                  onClick={() => props.logOut()}
                >
                  <p>log out</p>
                </Button>
                  </div>
        </div>
    )
}

function mapDispatchToProps(dispatch){
  return{
    logOut: () => dispatch(logOut()),
    openEditor: () => dispatch(openEditor())
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
