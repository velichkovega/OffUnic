import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

import NavBar from './NavBar.jsx';
import Header from './Header.jsx';

class Navigation extends Component {
    state = {
        navBar: false,
    }
    toggleDrawer = (open) => () => {
        this.setState({ navBar: open });
    }
    render() {
        return (
            <div>
                <Header toggleDrawer={this.toggleDrawer}/>
                <Drawer anchor={'left'} open={this.state['navBar']} onClose={this.toggleDrawer(false)}>
                    <NavBar  toggleDrawer={this.toggleDrawer}/>
                </Drawer>
            </div>
        )
    }
}

export default Navigation;