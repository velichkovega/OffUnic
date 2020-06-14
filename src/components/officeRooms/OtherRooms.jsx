import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
    },
    title: {
        fontSize: 22,
    },
    subTitle: {
        fontSize: 16,
        margin: '5px 0',
    },
    subTitleCount: {
        fontWeight: 'bold',
    },
    ceo: {
        borderColor: 'red',
        color: 'red'
    },
    panelDetailsContainer: {
        paddingTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    inputRoot: {
        color: 'inherit',
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));



function OtherRooms() {
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
            <Typography variant="h2">
                Other Rooms
            </Typography>
            <Divider />
            <Grid container justify="space-between" className={classes.gridContainer} spacing={2}>
                <Grid item md={6} >
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 715 (small, medium, big). Meeting room</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid alignItems="center" item>
                                        <Button variant="contained" color="primary">
                                            Reserve - Big
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Reserve - medium
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Reserve - small
                                        </Button>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Room: 701. Kitchen</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Button variant="contained" color="primary">
                                    Press the button to eat
                                </Button>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 723. CEO</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip  className={classes.ceo} variant="outlined" label="Max Girilishen" />
                                    </Grid>
                                    <Grid item>
                                        <Chip className={classes.ceo} variant="outlined" label="Alexander V. Protoven" />
                                    </Grid>
                                    <Grid item>
                                        <Chip className={classes.ceo} variant="outlined" label="Sergiy Prykhodko" />
                                    </Grid>
                                    <Grid item>
                                        <Chip className={classes.ceo} variant="outlined" label="Bogdan V. Pankiv" />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OtherRooms;