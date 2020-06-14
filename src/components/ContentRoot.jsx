import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { connect } from 'react-redux';
import checkUser from './../store/actions/checkUser.js';

import Routers from './Routers.jsx';
import LoginPage from './LoginPage.jsx';

class ContentRoot extends Component {
    submit = (login, pass) => {
        this.props.logInUser(login, pass);
        
    }
    render() {
        return(
            <Switch>
                {this.props.isAuth ? <Routers /> : <LoginPage submit={this.submit} statusLogin={!this.props.isAuth && this.props.authDirty} />};
            </Switch>
        )
    }
}

export default connect(
    state => ({
        ...state.auth
    }),
    dispatch => ({
        logInUser: (login, pass) => {
            dispatch(checkUser(login, pass));
        },

    })
)(ContentRoot);