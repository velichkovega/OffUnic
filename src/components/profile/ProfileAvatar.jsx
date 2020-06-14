import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        maxHeight: 500,
        position: "relative",
        margin: 'auto',
    },
    boxContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

function ProfileAvatar (props) {
    const classes = useStyles();
    return (
        <Box className={classes.boxContainer}>
            <Avatar className={classes.avatar} src={props.avatarSrc}>N</Avatar>
        </Box>
    )
}

export default ProfileAvatar;