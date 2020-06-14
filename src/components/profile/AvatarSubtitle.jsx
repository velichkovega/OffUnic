import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WorkIcon from '@material-ui/icons/Work';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    btnContainer: {
        marginTop: theme.spacing(1)
    },
    divederItem: {
        width: '100%',
    },
    dividerInset: {
        position: 'absolute',
        bottom: 72,
        left: 15,
    },
    workColor: {
        backgroundColor: "red",
    },
    teamColor: {
        backgroundColor: "blue"
    },
    vacationColor: {
        backgroundColor: "green"
    },
    name: {
        fontSize: 22,
    }
}));

function AvatarSubtitle(props) {
    const classes = useStyles();

    return(
        <Box>
            <Typography align="center" className={classes.name}  component="h1">
                {props.maianInfo.name}
            </Typography>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.workColor} >
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Position" secondary={props.maianInfo.position} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.teamColor}>
                            <VisibilityIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Project" secondary={props.maianInfo.project} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.vacationColor}>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Status" secondary={props.maianInfo.status} />
                </ListItem>
                <Divider component="li" />
            </List>
            <Grid container direction="row" className={classes.btnContainer} justify="space-around" alignItems="center" spacing={2}>
                <Button variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />}>
                    Message
                </Button>
                <Button variant="contained" color="primary" className={classes.button} endIcon={<PersonAddIcon />}>
                    Add to meeting
                </Button>
            </Grid>
        </Box>
    )
}

export default AvatarSubtitle;