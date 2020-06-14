import React from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
        paddingBottom: theme.spacing(1)
    },
    title: {
        padding: '15px 0 15px 0'
    },
    subTitle: {
        fontSize: 16,
        margin: '5px 0',
    },
    subTitleCount: {
        fontWeight: 'bold',
    },
    frontEnd: {
        color: 'green',
        borderColor: 'green'
    },
    backEnd: {
        color: 'blue',
        borderColor: 'blue'
    },
    ceo: {
        borderColor: 'red',
        color: 'red'
    },
    qa: {
        color: 'orange',
        borderColor: 'orange'
    },
    listItem: {
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'center'
    }
}));

function CommonInfo() {
    const classes = useStyles();

    return(
        <Paper className={classes.container}>
            <Typography align="center" className={classes.title} variant="h2">
                Common info
            </Typography>
            <Divider />
            <Typography align="center" className={classes.subTitle}>
                Employee:<Typography align="left" component="span" className={classes.subTitleCount}> 150</Typography>
            </Typography>
            <Typography align="center" className={classes.subTitle}>
                Rooms:<Typography align="left" component="span" className={classes.subTitleCount}> 14</Typography>
            </Typography>
            <Typography align="center" className={classes.subTitle}>
                Projects:<Typography align="left" component="span" className={classes.subTitleCount}> 4</Typography>
            </Typography>
            <Divider />
            <div className={classes.listItem}>
                <Chip label="Front-end" className={classes.frontEnd} variant="outlined"/>
            </div>
            <div className={classes.listItem}>
                <Chip label="Back-end" className={classes.backEnd} variant="outlined"/>
            </div>
            <div className={classes.listItem}>
                <Chip label="QA" className={classes.qa} variant="outlined"/>
            </div>
            <div className={classes.listItem}>
                <Chip label="CEO" className={classes.ceo} variant="outlined"/>
            </div>
            <div className={classes.listItem}>
                <Chip label="Other" variant="outlined"/>
            </div>
        </Paper>
    )
}

export default CommonInfo;