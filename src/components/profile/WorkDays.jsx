import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    title: {
        fontSize: 22
    },
    vacationColor: {
        backgroundColor: "green"
    },
    hospitalColor: {
        backgroundColor: "#f44336"
    },
    remoteWorkColor: {
        backgroundColor: "#ff9800"
    },
    btnWrapper: {
        display: "flex",
        justifyContent: "flex-end"
    }
}));

function WorkDays(props) {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography className={classes.title}>Working day</Typography>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <Avatar className={classes.vacationColor}>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={props.workDays.daysVacation} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar className={classes.hospitalColor}>
                            <LocalHospitalIcon />
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={props.workDays.seekLeave} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar className={classes.remoteWorkColor}>
                            <HomeWorkIcon />
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary={props.workDays.remote} />
                </ListItem>
            </List>
        </div>
    )
}

export default WorkDays;