import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import logoutUser from './../../store/actions/logoutUser';

class ProfileList extends Component {
    state = {
        openMenu: false,
        anchorEl: null,
    }

    menuProfileOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    menuProfileClose = () => {
        this.setState({anchorEl: null})
    }

    renderMenu = () => (
        <Menu
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.menuProfileClose}
            onClick={this.menuProfileClose}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MenuItem onClick={this.menuProfileClose}>
                <Link to="/profile">My profile</Link>
            </MenuItem>
            <MenuItem onClick={this.props.logOut}>Log out</MenuItem>
        </Menu>
    );
    render() {
        return (
            <Box>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.menuProfileOpen}>
                    <AccountCircle />
                </IconButton>
                {this.renderMenu()}
            </Box>
            
        )
        
    }
}



export default connect(
    null,
    dispatch => ({
        logOut: () => {
            dispatch(logoutUser())
        }
    })
)(ProfileList);