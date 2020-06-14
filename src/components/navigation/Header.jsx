import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

import ProfileList from './ProfileList.jsx';
import YourMail from './YourMail.jsx';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

class Header extends Component {
    state = {
        isAuth: true,
        anchorEl: null
    }

    mainIconsHref = () => {
        return(
            <Grid container direction="row" justify="center" alignItems="center">
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <YourMail />
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <ProfileList />
            </Grid>
        )
    }

    loginProfile = () => {
        return this.state.isAuth ? this.mainIconsHref() : <Button color="inherit">Login</Button>;
    }

    classes = () => useStyles();
    
    render() {
        return(
            <div className={this.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Box maxWidth="xs" m={0} >
                                <Grid container direction="row" justify="flex-start" alignItems="center">
                                    <IconButton edge="start" onClick={this.props.toggleDrawer(true)} className={this.classes.menuButton} color="inherit" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" className={this.classes.title}>
                                        Title selected categories
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box maxWidth="xs">
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {this.loginProfile()}
                                </Grid>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;